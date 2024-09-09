export interface Image {
    id: number;
    url: string;
    year: number;
    month: number;
    date: `${number}-${number}-${number}`;
    description: string;
    // keywords: string[];
  }


export const images: Image[] = [
{ id: 1, url: 'https://lh3.googleusercontent.com/pw/AP1GczMEI8JD2pjDu5dR_Vo0kcB30Nq-JBlRMdBXXK8tGOVLh39lnbluv-7TiDsUptn_BiTAylhraGhxQCnZhAakMTSh6X0u-aqUgtRSv87aFVuIIUq6SS7RjrktU1FnrCBoU9_i145hbhdL9X0Gtwct5z9Z5A=w684-h912-s-no-gm?authuser=0', year: 2022, month: 9, date: "2023-09-22", description:"Primer día" },
{ id: 2, url: 'https://lh3.googleusercontent.com/pw/AP1GczP-eOFaqiSSPTzQloKeYKVSdtNeTDrN6jqp6lwcUkCiHX5-EVx5PeLdKS_SBIL_gtMzhB_N5zqG3oh5FDfNc0KHzUQbAnS6XkqpCQgpQMPIorVw8ywK8bS2o3gwe-nWpz_FHuItFKJSIj_ixgtjDrz_hQ=w912-h912-s-no-gm?authuser=0', year: 2022, month: 10, date: "2022-10-24", description:"Almorzando en lo de los tíos" },
{ id: 3, url: 'https://lh3.googleusercontent.com/pw/AP1GczO1-ehhhNcu3veZkfMh1AR2BLPFq9k6Or4BfGjyM_Gc-HGtVV15D40UAEsY1jmswpbfLFetgxJeFmiMbHdzg5YSvVJtETJNYZQnDcQA_sBPeDRqGBVx7cW0T-vRZWt_Crt9A8khP6y11khCPud2GtvGBg=w912-h912-s-no-gm?authuser=0', year: 2022, month: 11, date:"2022-11-15", description:"Tirando facha" },
{ id: 4, url: 'https://lh3.googleusercontent.com/pw/AP1GczO11v9jShBzEyrxNHaxhjgi-lz3dwT0ejftcXmjhK0dnQWOcd376gs24SGllTNE29hugNFeRO2iuooPqCevcZlF0orKnEOEHS1KlbC5HFznaGrbydjKpem0CFnwKnw2VREot96l6KSfQWgNmUM93rSRXA=w684-h912-s-no-gm?authuser=0', year: 2022, month: 12, date:"2022-12-18", description:"Festejando el campeonato mundial" },
{ id: 5, url: 'https://lh3.googleusercontent.com/pw/AP1GczPvQ_c6LaYCm8F4QDnBHI2CQQMMc3hmtfiX4f8JIxSNmyy5t00M-K48z3no6ket6NqJspyZyjUr8cMGdbxTR9LF1LI0o6tEJZy3HSJ7Gb55EbnCvNhB7R3yXdQkNr95oJGQMGfrvZcKa90bR3phkkRJvg=w1218-h912-s-no-gm?authuser=0', year: 2023, month: 1,date:"2023-01-16", description:"Hola!" },
{ id: 6, url: 'https://lh3.googleusercontent.com/pw/AP1GczMxUDrrjlIOAdcKNVv97D7Fwb4QnUV64qQNgP3nuQdzNdCgfncMp5YxMvzUeuKnP92xxy5Trv9Ce-KjSt0q8SXTyI6AgOj-LArMQk43IGA9gj6b_fJhmbZIWvT7I46zcwdyC2pUo6-73Ald88pXoqMTKw=w1218-h912-s-no-gm?authuser=0', year: 2023, month: 2, date:"2023-02-18", description:"De vacaciones en el sur" },
{ id: 7, url: 'https://lh3.googleusercontent.com/pw/AP1GczONkIRhC6LSJD_ub4q_Ehhai799KsFnaM-yvq7JNGpUzu2ahgBx-7y1-wVdmdxKoJTG36Rui7PmPTYoQTnjqz_Ejz8fecBij68kjMZVSPffIL-YBhej8VwAbvAuic76Vp88zbjNlx2EFzFQ7mSUmm7QEA=w684-h912-s-no-gm?authuser=0', year: 2023, month: 3, date:"2023-03-15", description:"En la mecedora" },
{ id: 8, url: 'https://lh3.googleusercontent.com/pw/AP1GczPaBnkMN-48JIJ4dUH23t6Y5Xm2aOcRKoUTc5fjkpjwMTLad9IUXOq9SnhCwa9ZtMQP8Hy54UMuFgkDGVYO8xie2PwNcVCp-0Qs0w7-gxeEegl9iQw7K-UobaIYwF-x3etpazfoy8H8g9inTwjUWxmIAA=w684-h912-s-no-gm?authuser=0', year: 2023, month: 4, date:"2023-04-02", description:"Ojos" },
{ id: 9, url: 'https://lh3.googleusercontent.com/pw/AP1GczNCuSuhkBv60SGaiZ9rTrWNgXntlD9mkJuM3jmGvztEwBptFgsXNhTla1x5sSRyMM0Ben-dzR_5I_4txcYDyjfh4iS92Qb3-Mp7RU62rRrh9HeUI40Wz_VETPwoMqWSgxfh6_ecrlu9XAiF3EEh0A9mxw=w684-h912-s-no-gm?authuser=0', year: 2023, month: 5, date:"2023-05-02", description:"Cumple de mami" },
{ id: 10, url: 'https://lh3.googleusercontent.com/pw/AP1GczNEzTYFO18KpE_cLRmXjP8LCYhSm9FshmKzOUcoOuhVV0kpB58EdugxmKUCD-tBuY7fndX2JVMknHiSadXMgajG_s3gRT1jA31jSaNVgAoNWajsgTVumP7pdiXujpj_qc--LixwlKKKvtWxoytSG1gjXw=w684-h912-s-no-gm?authuser=0', year: 2023, month: 6, date:"2023-06-07", description:"Mordiendo" },
// { id: 5, url: 'https://lh3.googleusercontent.com/pw/AP1GczOkpwO3WSPlldmvzeRluaE4JvSLSfAge1Fas5X0W2kPbmF0ZIwACMgmGu9df7-DRiv9765nyINql7hTIj8Ksd44rbdfNkicFFPl5aTXqXiBE07nQ8cU37ohgHAaNwFphcqaZq1XfNrzWswuJEcbEK-aPg=w912-h912-s-no-gm?authuser=0', year: 2024, month: 8, date:"2024-08-02", description:"Buzios" },
];
  