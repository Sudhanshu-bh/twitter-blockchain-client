import axios from 'axios'

const key = process.env.NEXT_PUBLIC_PINATA_API_KEY
const secret = process.env.NEXT_PUBLIC_PINATA_API_SECRET

export const pinJSONToIPFS = async (json: object) => {
  const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS'

  return axios
    .post(url, json, {
      headers: {
        pinata_api_key: key!,
        pinata_secret_api_key: secret!,
      },
    })
    .then((resp) => resp.data.IpfsHash)
    .catch((err) => console.log(err))
}

export const pinFileToIPFS = async (file: File, pinataMetadata: any) => {
  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS'

  let data = new FormData()
  data.append('file', file)
  data.append('pinataMetadata', JSON.stringify(pinataMetadata))

  return axios
    .post(url, data, {
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': 'multipart/form-data; boundary=${data._boundary}',
        pinata_api_key: key!,
        pinata_secret_api_key: secret!,
      },
    })
    .then((resp) => resp.data.IpfsHash)
    .catch((err) => console.log(err))
}
