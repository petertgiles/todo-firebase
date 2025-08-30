#!/usr/bin/env tsx

import * as dotenv from 'dotenv'
import { initAdmin } from './firebaseAdmin';
import {getAuth} from "firebase-admin/auth";

dotenv.config({path: "admin/.env"});

 await initAdmin();

  getAuth()
    .getUserByEmail('')
    .then((user) => {
      
      console.debug(JSON.stringify(user, null, 2))

        // Add incremental custom claim without overwriting existing claims.
    const currentCustomClaims = user.customClaims ?? {};
    
      // Add level.
      currentCustomClaims['app_user'] = true;
      // Add custom claims for additional privileges.
      return getAuth().setCustomUserClaims(user.uid, currentCustomClaims);
    

    })
    .catch((reason) => console.error(`Failure: ${reason}`));