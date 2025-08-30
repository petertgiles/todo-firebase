#!/usr/bin/env tsx

import * as dotenv from "dotenv";
import { initAdmin } from "./firebaseAdmin";
import { getAuth } from "firebase-admin/auth";
import { program, Argument } from "commander";

dotenv.config({ path: "admin/.env" });
await initAdmin();

program
  .command("view <email_address>")
  .description("View the details of a user")
  .action(async (email_address) => {
    const user = await getAuth().getUserByEmail(email_address);
    console.info(JSON.stringify(user, null, 2));
  });

program
  .command("authorize <email_address>")
  .description("Authorize a user to use the app")
  .action(async (email_address) => {
    const user = await getAuth().getUserByEmail(email_address);
    const currentCustomClaims = user.customClaims ?? {};
    currentCustomClaims["app_user"] = true;
    await getAuth().setCustomUserClaims(user.uid, currentCustomClaims);
    console.info("Success!");
  });

program
  .command("deauthorize <email_address>")
  .description("Removes authorize for a user to use the app")
  .action(async (email_address) => {
    const user = await getAuth().getUserByEmail(email_address);
    const currentCustomClaims = user.customClaims ?? {};
    delete currentCustomClaims["app_user"];
    await getAuth().setCustomUserClaims(user.uid, currentCustomClaims);
    console.info("Success!");
  });

program.parse();
