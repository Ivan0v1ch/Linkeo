import { ref } from "vue";

export const useCountrie = () => {
  const codeContrie = ref("es,br,ca,mx,us");

  const getCode = (code) => {
    codeContrie.value = code;    
  };

  const getPersons = async () => {
    const url = `https://randomuser.me/api/?nat=${countrieCode}&results=10&inc=gender,name,email,phone,picture,location,dob`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data.results;
  };

  return {
    //Variables
    codeContrie,
    //Metodos
    getPersons,
    getCode,
  };
};
