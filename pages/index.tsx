import Image from 'next/image'
import { Inter } from 'next/font/google'
import {gql, useQuery} from "@apollo/client"

const inter = Inter({ subsets: ['latin'] })

const GET_SHOP = gql`
  query {
    findShopByID(id: "366387046774735052") {
      _id
      description
      name
      ownerID
      products {
        _id
      }
    }
  }
`;


export default function Home() {

	const {data} = useQuery(GET_SHOP);
	console.log(data)
  return (
    <main
    >
     Home
    </main>
  )
}
