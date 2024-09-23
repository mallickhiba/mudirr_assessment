// pages/api/projects.js
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../lib/mongodb';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();

  if (req.method === 'GET') {
    // Fetch all projects
    const projects = await db.collection('projects').find({}).toArray();
    res.status(200).json({ projects });
  } else if (req.method === 'POST') {
    // Create a new project
    const { name, status, milestone, progress } = req.body;
    const result = await db.collection('projects').insertOne({
      name, status, milestone, progress
    });
    res.status(201).json(result);
  } else if (req.method === 'PUT') {
    // Update a project
    const { id, name, status, milestone, progress } = req.body;
    const result = await db.collection('projects').updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, status, milestone, progress } }
    );
    res.status(200).json(result);
  } else if (req.method === 'DELETE') {
    // Delete a project
    const { id } = req.body;
    const result = await db.collection('projects').deleteOne({ _id: new ObjectId(id) });
    res.status(200).json(result);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
