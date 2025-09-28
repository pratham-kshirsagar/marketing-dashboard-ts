export type KPI = {
  title: string;
  value: number;
  status: 'good' | 'bad';
  benchmark: number;
  internal: number;
};
export const kpis: KPI[] = [
  {
    title: 'Impressions – Organic Total',
    value: 1200,
    status: 'good',
    benchmark: 1200,
    internal: 1200,
  },
  {
    title: 'Page Views',
    value: 4560,
    status: 'bad',
    benchmark: 4560,
    internal: 4560,
  },
  {
    title: 'Visits',
    value: 3600,
    status: 'good',
    benchmark: 3600,
    internal: 3600,
  },
  {
    title: 'Search Visitors',
    value: 2012,
    status: 'bad',
    benchmark: 2012,
    internal: 2012,
  },
];
export const stacked = [
  {
    name: 'First Click by Channel',
    Organic: 320,
    Direct: 180,
    Email: 140,
    Referral: 110,
    Social: 90,
    Other: 70,
  },
  {
    name: 'Last Click by Channel',
    Organic: 300,
    Direct: 200,
    Email: 130,
    Referral: 120,
    Social: 100,
    Other: 90,
  },
  {
    name: 'Linear',
    Organic: 310,
    Direct: 190,
    Email: 150,
    Referral: 115,
    Social: 95,
    Other: 85,
  },
];
export const funnel = [
  { name: 'Impressions', value: 11920 },
  { name: 'Clicks', value: 9000 },
  { name: 'Form Submissions', value: 6000 },
];
export const donutVisitTopic = [
  { name: 'Markets & Economy', value: 2400 },
  { name: 'ETF', value: 1800 },
  { name: 'Sustainable Investing', value: 1200 },
  { name: 'China, Explained', value: 2200 },
  { name: 'Systematic Investing', value: 1600 },
  { name: 'Research', value: 1130 },
];
export const donutFocusFunds = [
  { name: 'QQQ', value: 400 },
  { name: 'SPMO', value: 300 },
  { name: 'SOHQ', value: 350 },
  { name: 'XLG', value: 350 },
];
export const donutDownloads = [
  { name: 'Dividend Reports', value: 3300 },
  { name: 'Lorem', value: 2800 },
  { name: 'Ipsum', value: 5030 },
];
export const tableRows = [
  {
    channel: 'Facebook',
    impressions: 1300,
    clicks: 900,
    conversions: 600,
    cpc: 23.12,
  },
  {
    channel: 'YouTube',
    impressions: 1300,
    clicks: 900,
    conversions: 600,
    cpc: 23.12,
  },
  {
    channel: 'LinkedIn',
    impressions: 1300,
    clicks: 900,
    conversions: 600,
    cpc: 23.12,
  },
];
export const social = [
  { day: '1 May', liImp: 650, fbImp: 950, liCtr: 12, fbCtr: 9 },
  { day: '2 May', liImp: 620, fbImp: 720, liCtr: 11.5, fbCtr: 8.5 },
  { day: '3 May', liImp: 590, fbImp: 980, liCtr: 11, fbCtr: 8 },
  { day: '4 May', liImp: 560, fbImp: 610, liCtr: 10.5, fbCtr: 7.5 },
  { day: '5 May', liImp: 580, fbImp: 820, liCtr: 11, fbCtr: 8 },
  { day: '6 May', liImp: 630, fbImp: 900, liCtr: 12, fbCtr: 9 },
  { day: '7 May', liImp: 640, fbImp: 700, liCtr: 12.5, fbCtr: 9.5 },
  { day: '8 May', liImp: 700, fbImp: 760, liCtr: 14, fbCtr: 10.5 },
  { day: '9 May', liImp: 900, fbImp: 880, liCtr: 18, fbCtr: 14 },
  { day: '10 May', liImp: 1100, fbImp: 950, liCtr: 20, fbCtr: 16 },
  { day: '11 May', liImp: 1020, fbImp: 860, liCtr: 19, fbCtr: 15 },
];
