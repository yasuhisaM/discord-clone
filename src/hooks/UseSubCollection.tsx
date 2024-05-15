import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  DocumentData,
  Query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { useAppSelector } from "../app/hooks";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const UseSubCollection = (
  collectionName: string,
  subCollectionname: string
) => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
  useEffect(() => {
    let collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionname
    );
    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "desc")
    );
    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
    });
  }, [channelId]);
  return { subDocuments };
};

export default UseSubCollection;
