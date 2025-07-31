#!/usr/bin/env tsx

import * as dotenv from 'dotenv'
import { getFirestore } from "firebase-admin/firestore";
import { initAdmin } from './firebaseAdmin';

dotenv.config({path: "admin/.env"});

 await initAdmin();
  const firestore = getFirestore();
  const listItemsSnapshot = await firestore.collection("list_items").get();
  listItemsSnapshot.docs.forEach((doc) => {
    console.debug(JSON.stringify(doc.data()));
  });