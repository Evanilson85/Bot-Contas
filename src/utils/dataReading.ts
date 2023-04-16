interface DataExcel {
  data: string | number;
  description: string;
  symbolData: string;
  inputDonations?: string | number | null;
  exitDonations?: string | number | null;
  inputBack?: string | number | null;
  exitBack?: string | number | null;
  inputOther?: string | number | null;
  exitOther?: string | number | null;
}

const data: DataExcel[] = [
  {
    data: '06',
    description: 'teste 06',
    symbolData: 'T',
    inputDonations: '20',
    exitDonations: '',
    inputBack: '',
    exitBack: '',
    inputOther: '',
    exitOther: '',
  },
  {
    data: '07',
    description: 'teste21',
    symbolData: 'R',
    inputDonations: '',
    exitDonations: '30,00',
    inputBack: '30,00',
    exitBack: '22,35',
    inputOther: '',
    exitOther: '',
  },
  {
    data: '33',
    description: 'teste222',
    symbolData: 'Y',
    inputDonations: '',
    exitDonations: '',
    inputBack: '30',
    exitBack: '400',
    inputOther: '',
    exitOther: '',
  },
];

export { data };
