import createClient from "./apollo-client";
import { gql } from "@apollo/client";

export async function getCards() {
  const client = createClient();
  const { data } = await client.query({
    query: gql`
      {
        get_memo_tests {
          id
          name
        }
      }
    `
  })
  return data;
}

export async function getCardsImages() {
  const client = createClient();
  const { data } = await client.query({
    query: gql`
      {
        get_memo_tests {
          id
          images
        }
      }
    `
  })
  return data;
}