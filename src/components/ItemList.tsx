import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { useFirebaseApp } from "../providers/firebase/hooks";
import { useEffect, useState } from "react";
import { listItemConverter, type ListItem } from "../types/ListItem";

const ItemList = () => {
  const { app } = useFirebaseApp();
  if (!app) {
    throw new Error("No Firebase app available");
  }

  const [asyncErrorMessage, setAsyncErrorMessage] = useState<string | null>();
  if (asyncErrorMessage) {
    throw asyncErrorMessage;
  }

  const [listItems, setListItems] = useState<(ListItem & { id: string })[]>([]);

  const db = getFirestore(app);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "list_items").withConverter(listItemConverter),
      (snapshot) => {
        const newListItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        newListItems.sort((item1, item2) =>
          item1.label > item2.label ? 1 : -1
        );
        setListItems(newListItems);
      },
      (error) => setAsyncErrorMessage(error.message)
    );
    return unsubscribe;
  }, [db]);

  return (
    <ul className="flex flex-col gap-2">
      {listItems.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            name={item.id}
            checked={item.checked}
            readOnly
          />
          <label htmlFor={item.id}> {item.label}</label>
        </div>
      ))}
    </ul>
  );
};

export default ItemList;
