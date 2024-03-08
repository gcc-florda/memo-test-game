import createClient from "./apollo-client";
import { gql } from "@apollo/client";

export async function getMemoTests() {
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

export async function getMemoTest(id: string) {
  const client = createClient();
  const { data } = await client.query({
    query: gql`
      {
        get_memo_test(id: ${id}) {
          name
          images
        }
      }
    `
  })
  return data;
}

export async function getGameSession(id: string) {
  const client = createClient();
  const { data } = await client.query({
    query: gql`
      {
        get_game_session(id: ${id}) {
          retries
          state
        }
      }
    `
  })
  return data;
}

export async function createMemoTest(id: string, name: string, images: string) {
  const client = createClient();
  const { data } = await client.mutate({
    mutation: gql`
      {
        create_memo_test(id: ${id}, name: ${name}, images: ${images}) {
          id
          name
        }
      }
    `
  })
  return data;
}

export async function deleteMemoTest(id: string) {
  const client = createClient();
  const { data } = await client.mutate({
    mutation: gql`
      {
        delete_memo_test(id: ${id}) {
          id
          name
        }
      }
    `
  })
  return data;
}

export async function createGameSession(id: string, memo_test_id: string, retries: number, pairs: number, state: string) {
  const client = createClient();
  const { data } = await client.mutate({
    mutation: gql`
      mutation {
        create_game_session(
          id: ${id}, 
          memo_test_id: ${memo_test_id}, 
          retries: ${retries},
          number_of_pairs: ${pairs},
          state: ${state}
        ) {
          retries
          state
        }
      }
    `
  })
  return data;
}

export async function updateGameSessionPair(id: string, pairs: number) {
  const client = createClient();
  const { data } = await client.mutate({
    mutation: gql`
      {
        update_game_session_pair(
          id: ${id},
          number_of_pairs: ${pairs},
        ) {
          id
          number_of_pairs
        }
      }
    `
  })
  return data;
}

export async function endGameSession(id: string, state: string) {
  const client = createClient();
  const { data } = await client.mutate({
    mutation: gql`
      {
        end_game_session(
          id: ${id},
          state: ${state},
        ) {
          id
          state
        }
      }
    `
  })
  return data;
}