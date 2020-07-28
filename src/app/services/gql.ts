import gql from 'graphql-tag';

export const searchQuery = gql`
          query searchQuery($term: String!){
            twitter {
              search(q: $term, count: 50) {
               id
               created_at
               text
                user {
                  screen_name
                  profile_image_url
                  name
                }
              }
            }
          }
      `;
