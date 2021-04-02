export const formatFormDataToRemote = (data) => {
  const formattedData = {};
  Object.entries(data).forEach(([key, value]) => {
    if (key.includes('other') && !!value) {
      const baseKey = key.replace('_other', '');
      formattedData[baseKey] = value;
    } else if (!formattedData[key]) {
      // @ts-ignore
      formattedData[key] = value.value || value;
    }
  });

  return formattedData;
};

export const activityFieldList = () => [
  'Indústria',
  'Comércio (Varejo e Atacado)',
  'Serviços',
  'Outro',
];

export const operationFieldList = () => [
  'Gráfica',
  'Têxtil e calçados',
  'Alimentos e bebidas',
  'Mobiliário',
  'Metalurgia e Siderurgia',
  'Químicos e derivados',
  'Mecânica',
  'Fármacos e medicamentos',
  'Eletrônicos e eletrodomésticos',
  'Energia (óleo, gás e energia elétrica)',
  'Veículos e motocicletas',
  'Combustíveis',
  'Perfumaria e cosméticos',
  'Bares, restaurantes e padarias',
  'Logística e transporte',
  'Turismo',
  'Saúde',
  'Educação',
  'Lazer',
  'Financeiro',
  'Tecnologia da informação',
  'Consultoria',
  'Agronegócio',
  'Outro',
];

export const employeesTreatmentList = () => [
  'Colaboladores',
  'Funcionários',
  'Outro',
];
