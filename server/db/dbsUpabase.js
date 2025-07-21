process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import {config} from "dotenv";
import { createClient } from "@supabase/supabase-js";
config(); 
const supUrl = process.env.SUPABASE_URL;
const supKay = process.env.SUPABASE_ANON_KEY;


export const supabase = createClient(  
  supUrl,
  supKay
);
