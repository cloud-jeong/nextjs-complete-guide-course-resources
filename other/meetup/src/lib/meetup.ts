"use server";

import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import useSWR from "swr";

export async function saveMeetup(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			""
		);

		const db = client.db();
		const meetupsCollection = db.collection("meetups");
		const result = await meetupsCollection.insertOne(data);
		console.log(result);

		client.close();

		res.status(201).json({ message: "meetup inserted!" });
	}
}

export const useMeetup = (url: string) => {
	const fetcher = () => fetch(url);
	const { data, error } = useSWR(url, fetcher);

	if(error) 

};
