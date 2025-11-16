import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	console.log(req);
	const data = req.body;
	console.log(data);

	const client = await MongoClient.connect(
		"mongodb+srv://utcloud:pkU5dlVYzYcta3UY@cluster0.rsrrddj.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
	);

	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	const result = await meetupsCollection.insertOne(data);
	console.log(result);

	client.close();

	// res.json({ message: "meetup inserted!" });
}

// export default async function GET(req: NextApiRequest, res: NextApiResponse) {
// 	if (req.method === "GET") {
// 		const data = req.body;

// 		const client = await MongoClient.connect(
// 			"mongodb+srv://utcloud:pkU5dlVYzYcta3UY@cluster0.rsrrddj.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
// 		);

// 		const db = client.db();
// 		const meetupsCollection = db.collection("meetups");
// 		const result = await meetupsCollection.insertOne(data);
// 		console.log(result);

// 		client.close();

// 		res.status(201).json({ message: "meetup inserted!" });
// 	}
// }
