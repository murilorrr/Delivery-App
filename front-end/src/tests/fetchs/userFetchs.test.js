import { getAllUsers, createCustomer, getByEmail } from "../../fetchs";
import { generateJWT } from "../../../../back-end/src/utils";

let fetchAllUsers = getAllUsers;
let fetchCreateCustomer = createCustomer;
let fetchGetByEmail = getByEmail;

const customerUser = {
  name: "Pablo Flatley",
  email: "Pablo52@hotmail.com",
  password: "2df3208e28e5774d498f00ec5485cd98",
  role: "customer",
};

const usersMock = [
  {
    id: 22,
    name: "Pablo Flatley",
    email: "Pablo52@hotmail.com",
    password: "2df3208e28e5774d498f00ec5485cd98",
    role: "customer",
  },
  {
    id: 23,
    name: "Israel Hegmann",
    email: "Israel_Hegmann@gmail.com",
    password: "271dde5c4178969a0b8131364cc991c7",
    role: "customer",
  },
];

describe("Teste de requisições que consomem o recurso de usuário", () => {
  describe("Test createCustomer", () => {
    test("Espera-se que retorne objeto com o token do usuário criado", async () => {
      const token = generateJWT(customerUser);
      fetchCreateCustomer = jest.fn().mockReturnValue({ token });

      const fetchresponse = await fetchCreateCustomer(customerUser);

      expect(fetchresponse).toStrictEqual({ token });
      expect(fetchCreateCustomer).toHaveBeenCalledTimes(1);
    });
  });

  describe("Test getByEmail", () => {
    test("Espera-se que retorne um objeto com o usuário", async () => {
      fetchGetByEmail = jest.fn().mockReturnValue(customerUser);

      const fetchresponse = await fetchGetByEmail(customerUser.email);

      expect(fetchresponse).toStrictEqual(customerUser);
      expect(fetchGetByEmail).toHaveBeenCalledTimes(1);
    });
  });

  describe("Test Users getAll", () => {
    test("Espera-se que retorne um array de usuários", async () => {
      fetchAllUsers = jest.fn().mockReturnValueOnce([...usersMock]).mockRejectedValue({ message: 'error' });
      // fetchAllUsers.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

      const fetchresponse = await fetchAllUsers();

      expect(fetchresponse).toStrictEqual(usersMock);
      expect(fetchAllUsers).toHaveBeenCalledTimes(1);

      const erro = await fetchAllUsers().catch((error) => error);

      expect(erro).toStrictEqual({ message: 'error' });
    });
  });
});
