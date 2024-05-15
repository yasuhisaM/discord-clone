import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  DocumentData,
  Query,
} from "firebase/firestore";

interface Channels {
  id: string;
  channel: DocumentData;
}

const UseCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));
  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, []);
  return { documents };
};

export default UseCollection;
