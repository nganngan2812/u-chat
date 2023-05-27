import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (coll, condition) => {
  const [documents, setDocuments] = useState([]);

  React.useEffect(() => {
    let collectionRef = collection(db, coll);
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        // reset documents data
        setDocuments([]);
        return;
      }

      collectionRef = query(collectionRef, where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      ), orderBy ('createdAt'));
    }

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocuments(documents);
    });

    return unsubscribe;
  }, [collection, condition]);

  return documents;
};

export default useFirestore;
