import type { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export interface ListItem {
    label: string;
    checked: boolean;
}

// Firestore data converter
export const listItemConverter = {
    toFirestore: (listItem: ListItem) => {
        return {
            label: listItem.label,
            checked: listItem.checked,            
            };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);
        return {
            label: data.label,
            checked: data.checked,
        } as ListItem;
    }
};