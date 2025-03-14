const url = `${process.env.PAYMENT_LINK_PRODUCAO}`;
const token = `${process.env.TOKEN_API}`;

interface RequestBody{
  name: string;
  amount: number;
  quantity: number;
}

const CreatePaymentService = async (data: RequestBody) => {
  try {
    const {name, amount, quantity}: RequestBody = data;

      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: `Basic ${token}`
        },
        body: JSON.stringify({
          is_building: false,
          payment_settings: {
        credit_card_settings: {
          operation_type: 'auth_and_capture',
          installments: [{number: 1, total: amount}, 
            {number: 2, total:  amount},
            {number: 3, total:  amount},
            {number: 4, total:  amount},
            {number: 5, total:  amount},
            {number: 6, total:  amount},
            {number: 7, total:  amount},
            {number: 8, total:  amount},
            {number: 9, total:  amount},
            {number: 10, total:  amount}
          ]
        },
        boleto_settings: {
          instructions: 'Pay with boleto',
          due_in: 5 
        },
        pix_settings: {
          expires_in: 3600
        },
        accepted_payment_methods: ['credit_card', 'pix', 'boleto']
          },
          cart_settings: {items: [{amount: amount, name: name , default_quantity: quantity}]},
          name: name,
          type: 'order'
        })
      };
      
      const response = await fetch(url, options);
      const json = response.json();
      return json;

  } catch (error) {
    return error;
  }
}

const FindPayments = async () => {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `Basic ${token}`
      }
    };
    const response = await fetch(url, options);
    const json = response.json();
    return json;

  } catch (error) {
    return error;
  }
}

const FindByIdPayments = async (id: string) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `Basic ${token}`
      }
    };
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));

    const response = await fetch(`${url}/${id}`, options);
    const json = response.json();
    return json;
  
  } catch (error) {
    return error;
  }
}

const DesactivatePayments = async (id: string) => {
  try {
    const options = {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        authorization: `Basic ${token}`
      }
    };

    const response = await fetch(`${url}/${id}/cancel`, options);
    const json = response.json();
    return json;
  
  } catch (error) {
    return error;
  }
}

export default {CreatePaymentService,FindPayments,FindByIdPayments,DesactivatePayments};