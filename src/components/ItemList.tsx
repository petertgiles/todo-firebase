import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useFirebaseApp } from "../providers/firebase/hooks";
import { useEffect, useState } from "react";
import { listItemConverter, type ListItem } from "../types/ListItem";

const ItemList = () => {
  const { app } = useFirebaseApp();
  const [asyncErrorMessage, setAsyncErrorMessage] = useState<string | null>();
  if (asyncErrorMessage) {
    throw asyncErrorMessage;
  }

  const [listItems, setListItems] = useState<(ListItem & { id: string })[]>([]);

  if (!app) {
    throw new Error("No Firebase app available");
  }

  const db = getFirestore(app);

  useEffect(() => {
    const fetchListItems = async () => {
      const querySnapshot = await getDocs(
        collection(db, "list_items").withConverter(listItemConverter)
      );
      const newListItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListItems(newListItems);
    };

    fetchListItems().catch((reason) => setAsyncErrorMessage(reason));
  }, [db]);

  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id}>{`${item.label} -> ${item.checked}`}</li>
      ))}
    </ul>
  );
};

export default ItemList;
