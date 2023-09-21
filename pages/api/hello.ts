// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import items from '@/models/items'
import connectDB from '@/config/mongodb';
import { error } from 'console';

type Data = {
  name?: string
  message?: string
  item?: any
  error?: any
}

interface RequestBody {
  name?: string;
  description?: string;
  todo?: string;
  startDate?: Date;
  endDate?: Date;
  _id?:string;
  status?:string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      await connectDB();
      const { name, description ,todo,startDate,endDate} = req.body as RequestBody;
      if (name == null || todo == null || name == "" || todo == "") {
        return res.status(500).json({message:"bad request"})
      }
      const newItem = new items({
        name,
        description,
        todo,
        startDate,
        endDate,
      });
      newItem.save();
      return res.status(201).json({ message: 'Item added successfully'});
    } catch(error) {
      console.log(error)
    }
    
  } else if (req.method === 'GET') {
    try {
      await connectDB()
      const item =  await items.find({});
      return res.status(200).json({message:'masuk', item:item});
    } catch (error) {
      return res.status(500).json({error: error});
    }
  } else if (req.method === 'PUT') {
    try {
      await connectDB()
      const { _id, status} = req.body as RequestBody;
      if (_id == null || status == null) {
        return res.status(500).json({message:"bad request"})
      }
      const item =  await items.findByIdAndUpdate(_id,{
        status
      });

      if (!item) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json({message:'masuk', item:item});
    } catch (error) {
      return res.status(500).json({error: error});
    }
  } else if (req.method === 'DELETE' ) {
    await connectDB()
    const { _id} = req.query as RequestBody;
    if (_id == null || _id == "") {
      return res.status(500).json({message:"bad request"})
    }
    const item =  await items.findByIdAndDelete(_id);
    if (!item) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({message:'delete', item:item});
  } else {
    return res.status(200).json({message:"kau ni apee"})
  }
  
}
