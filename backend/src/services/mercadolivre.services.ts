import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const CSRF = process.env.ML_CSRF;
const COOKIE = process.env.ML_COOKIE;
const TAG = process.env.ML_TAG; // seu código de afiliado


type affiliateLinkProps = {
  tag?: string;
  prods: object[]
}

type getProductsProps = {
  q: string; 
  sort?: string; 
  category?: string; 
  offset?: string;
  limit?: string;
  frete_gratis?: string
}

export async function getRefreshToken() {

  const PRINCIPAL_URL = 'https://api.mercadolibre.com/oauth/token'

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    }

    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: '712227867973587',
      client_secret: 'CfcKvS6a3zFARiTdSeRAyVwxljBfMSqF',
      code: 'TG-6938d862a1ce6700012dd298-158293791',
      redirect_uri: 'https://giftgenius.space',
    });

  const { data } = await axios.post(PRINCIPAL_URL, params.toString(), { headers });  
  return data
  
}

export async function getAccessToken() {

  const PRINCIPAL_URL = 'https://api.mercadolibre.com/oauth/token'

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    }

    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: '712227867973587',
      client_secret: 'CfcKvS6a3zFARiTdSeRAyVwxljBfMSqF',
      code: 'TG-6938d862a1ce6700012dd298-158293791',
      redirect_uri: 'https://giftgenius.space',
    });

  const { data } = await axios.post(PRINCIPAL_URL, params.toString(), { headers });  
  return data
  
}


export async function createAffiliateUrls(productUrls: affiliateLinkProps) {
  const url = "https://www.mercadolivre.com.br/affiliate-program/api/v2/affiliates/createLink";

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*",
    "X-CSRF-Token": CSRF,
    "Cookie": COOKIE,
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
    "Origin": "https://www.mercadolivre.com.br",
    "Referer": "https://www.mercadolivre.com.br/afiliados/linkbuilder",
    "sec-ch-ua": '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  };

  const body = {
    tag: TAG,
    site_id: "MLB",
    urls: productUrls,
  };

  const response = await axios.post(url, body, { headers });
  return response.data;
}


export async function getProducts(params: getProductsProps) {

    const { q, sort, category, offset, limit, frete_gratis } = params;

    try {

      const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search'

      const ACCESS_TOKEN = 'APP_USR-712227867973587-120922-805e11e681bb69639be9a0fc0dbebf84-158293791'

      const header = {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
      }

      const { data } = await axios.get('https://api.mercadolibre.com/sites/MLB/search', {
        params: { q: 'iphone' },
        ...header
      });

      return data

  } catch (error) {
    return error
  }

}