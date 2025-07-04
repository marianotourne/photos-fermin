export interface Image {
    id: number;
    url: string;
    year: number;
    month: number;
    date: `${number}-${number}-${number}`;
    description: string;
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
{ id: 11, url: 'https://lh3.googleusercontent.com/pw/AP1GczOzFzzFsRkS9D2OsJVO7gtdLDvF6DP0zmSQgfyH1MvvMQb9W82GNLf0qTjX8U_bEWS4cGeq5R2lhq3HF6GUXOEjqAwp8tzkyr9FbukGoK4LOSysziSDfOMXiu-JUbzIcEMEWkuWxPLXcp7X0SsGkw1yTw=w912-h912-s-no-gm?authuser=0', year: 2023, month: 7, date:"2023-07-30", description:"Abrigado en la plaza" },
{ id: 12, url: 'https://lh3.googleusercontent.com/pw/AP1GczM2F-VFrGl4iYoz2VJa51eJd9klHVMlZgy-9KJ-YKVo5g5FNpGCUN6jLuGflII45iu5wm5_hsysu_rfii3AuaUspFTeQ7OhMzJ9qyVoXtvjMdj1dl90kbwS6taRRDO5wa4DAD3PajqWcIHGqzybYbtRzw=w912-h912-s-no-gm?authuser=0', year: 2023, month: 8, date:"2023-08-17", description:"Buzios" },
{ id: 13, url: 'https://lh3.googleusercontent.com/pw/AP1GczP5aRziDFO4VWpcjPk6yUby78s-l3ZYVPC6d1DYOBQNOxeS86YHagr-6GFwbK3ATfsCBVji3zPrg3WSK8u3Q5a9Jf6-EUFMF8gUN9gNV8NaCDnZT1yJ3uhWV-MwcnBJLz4qVXmZsqzNU3SCbl3OczLWkA=w912-h912-s-no-gm?authuser=0', year: 2023, month: 9, date:"2023-09-23", description:"Primer año" },
{ id: 14, url: 'https://lh3.googleusercontent.com/pw/AP1GczPR0kgLadMXq2wjfc_XHqXlDid9rfDhEbnjO6FlrX8IB-a2gZow0kO3whJW1yYiPbWpWhDvNEwvOr-UByt2t6aoEXHbAKv7z8MkGPGs2Ry0vOqMmrxladn8wuyg9x8cz0gElqrt9AHw-FwHnlp0dG3etA=w1218-h912-s-no-gm?authuser=0', year: 2023, month: 10, date:"2023-10-28", description:"Pelotero" },
{ id: 15, url: 'https://lh3.googleusercontent.com/pw/AP1GczNOOypf1jMveqvyRu6JL3QMurpyJv2qYJPTU8f_cdC6G6wZENG5_yZfLiIhmbFt8__jV0474yDxIUdO4zYNMzTZXkphzmlgc4o4OISkYRW0e5isjxMBFEQx5Z-KMUNFp85-RxFgBgRPkgWzuhfqqa45Dg=w684-h912-s-no-gm?authuser=0', year: 2023, month: 11, date:"2023-11-04", description:"Casamiento de los tíos" },
{ id: 16, url: 'https://lh3.googleusercontent.com/pw/AP1GczOIoxoQ6fIsSvJh0iDWHmpNuF0K7Lbk7lSbeCGk53zL_uJwqVQaedgaUGr2m5LTnuvbexC-kxGEblWwK5hlVexljGAChI_esoIL_YTsm-b7N5QudAbqjAhbqhlMgAX_X8DVu_WfFFNnTLjHCXIqhDZ7qA=w684-h912-s-no-gm?authuser=0', year: 2023, month: 12, date:"2023-12-13", description:"En los pile" },
{ id: 17, url: 'https://lh3.googleusercontent.com/pw/AP1GczOlA1kzoVdxBIQ-sPZg6lwET7YStrzxBcF1imcu7uLSIztSJ60deYr4-hN-A1JvM9RClhYPqIUML8rkZJ-ESO2skJhSOyTXHTEStwYc5rkuPjGfS5cPKl3Q8arkWdxR_VzH9GHd4Nng32Iv9cN78IvmtA=w912-h912-s-no-gm?authuser=0', year: 2024, month: 1, date:"2024-01-25", description:"Jugando a las escondidas" },
{ id: 18, url: 'https://lh3.googleusercontent.com/pw/AP1GczOjzaE93BWiQ58xgmAK0Sqy9QWLbViv46hDRnqDyt_9-UmJXHrgED2cFrHmqRbH1sks563zaTrb4HUpU27As9XarIGZ8rkQ0Qis-p3EpAvYTLsxi4e4yhUFxLtdJUx0D3jwiokz2oOHGpNfKMqbskHG5g=w684-h912-s-no-gm?authuser=0', year: 2024, month: 2, date:"2024-02-13", description:"Con los dinosaurios" },
{ id: 19, url: 'https://lh3.googleusercontent.com/pw/AP1GczMNhqgaIevetx4aWDG5BO4zCX38GLepB66OzrW_9RflNjGGfgjjAzt4ABMB6ilRFNGveLuHQUDMbCFLfvDl_MrpZMqj6KTxHjYe0s7ZgBnNlXaLGiKRD1frg6WhaLF4INg-JrRoqCK9mnaImCCntSnlZQ=w684-h912-s-no-gm?authuser=0', year: 2024, month: 3, date:"2024-03-03", description:"Tomando agua" },
{ id: 20, url: 'https://lh3.googleusercontent.com/pw/AP1GczNrAiH61Da_gP_87PpFr3wzGWIpqoEppGbRoqL4ScafONST2Oesb3chP9XWGx3qYoDU8tY_gXHEw4Zx2NgUkxh4zHu3JkzG2eZ5Q0ipmfregyelt8i12v7tHkA-bVE1Muc9fVlaQjEtvZDVeV7E5_7liw=w684-h912-s-no-gm?authuser=0', year: 2024, month: 4, date:"2024-04-25", description:"Riendome en casa" },
{ id: 21, url: 'https://lh3.googleusercontent.com/pw/AP1GczNA5RjMV-aJf7Um4DrHvB_uonsFtTQ60SSeJX9pwxWw8PbM6txVOShFS2Ay1pOoSoMewFAnlSJkqZy-RsoKT1Q71W39WoqLo0wmPSM3ustF_NT1ww1d-UsgOL0mgZlql73U3bNa_BHbj9hxN7r3ECogfw=w684-h912-s-no-gm?authuser=0', year: 2024, month: 5, date:"2024-05-11", description:"Jugando en el dique" },
{ id: 22, url: 'https://lh3.googleusercontent.com/pw/AP1GczNqtyhJEGD-aGtXiattDmnlayi4Y_NognTbDDtVUQdwXq5_PY26Vk1RnnjY87uoTEXkJAVdkA653hIQ4v85_NM7wMqV2D3K5Bt5y02GMJWov4EyGTDcnDW0CBDzXDtX-TsSsYXOvQ4W3grF_4l6cWbctg=w1130-h1508-s-no-gm?authuser=0', year: 2024, month: 6, date:"2024-06-10", description:"Capitán del barco" },
{ id: 23, url: 'https://lh3.googleusercontent.com/pw/AP1GczMIl_lmOkUxwfSyJikz0NmwNGLDRTB74hIQVfcN57W7c-LLPJulEY9Z4HciK-cOClvDwBmAMPzm_9fRmgXeZyOXoxque62L52QjBNqrDdt9p6lkWCCU0UDj8P0CKqIkvavSbarFC6Epzg_L9vy3lBvMqw=w682-h912-s-no-gm?authuser=0', year: 2024, month: 7, date:"2024-07-16", description:"Relax" },
{ id: 24, url: 'https://lh3.googleusercontent.com/pw/AP1GczNIAEsSwSpu3EmJ1f4sR7DY6nKDtJ4Ne1uc6AIFFen8C8pR0cjeRGsXI-U5kNVLecCRh6Hy-FKXW3XkqgId76ne55_0LzQIE5Oed278H7mgXVxcAprFEpCDaMZRLrzzOfpK1DfjqFmeTlXBJgnxEI7m4g=w682-h912-s-no-gm?authuser=0', year: 2024, month: 8, date:"2024-08-13", description:"Pata pata en la plaza" },
{ id: 25, url: 'https://lh3.googleusercontent.com/pw/AP1GczNOkNNtQu-igsPaQqyDYFSNkfksMwF_m9yWyMRj8Nmu0vPrEAz2N-S-Qm1VZSEtesKmAifFSnACLy7Nt1JT4OpeY1W39uEYofPzFt5p5aOEdg6E8w4rgoAoJiM4EqoKhzQD6LON8ASaZd364c4Lj9Ekdg=w1018-h1360-s-no-gm?authuser=0', year: 2024, month: 9, date:"2024-09-23", description:"Cumple en la plaza" },
{ id: 26, url: 'https://lh3.googleusercontent.com/pw/AP1GczM5NujEHRXhcTale10RrOfejftQrU9eixz7f2js10h25SEvv80birC6OqnyM_W5QCOPIauDHRs_qmMd_58o85MbjBh8s2xzGmL1hr4DOykeGpwiRwbLaJ39Mp78l0vt22MwxVubBAy7aaoSEPJJAB7pzw=w1016-h1360-s-no-gm?authuser=0', year: 2024, month: 10, date:"2024-10-24", description:"Divertido?" },
{ id: 27, url: 'https://lh3.googleusercontent.com/pw/AP1GczO_FzG3g9jNbmBI5gKxHVwtfVvNGrkSa03E7vZBiCKkeAY8Nc5mWdpuIAYM5jGPiPL0v8to0IQtuTI_qpzaGVYPKp__plz_FjFCRMmh9MaHpk3x6JpBrmMlnhQ3G_ZgcayT-YzLzPADQ7F4JE7HMPuNsA=w730-h978-s-no-gm?authuser=0', year: 2024, month: 11, date:"2024-11-04", description:"Modelando en la plaza del tanque" },
{ id: 28, url: 'https://lh3.googleusercontent.com/pw/AP1GczPWQBmekzJCRoUoGJNYZWGwrlDcPpsPRCZLOlqxfKOW2KVLOWNz-2QhFOvzw1c-CBGSI11-cla2tM_F57uWPS3FCnzNdiwHCOsd87TeZPJ-654DVoBz-eUgYeBx-I4e3xpt8NS4h6a5qbX7QbvYV3-rUg=w432-h578-s-no-gm?authuser=0', year: 2024, month: 12, date:"2024-12-23", description:"Comiendo con los patos" },
{ id: 29, url: 'https://lh3.googleusercontent.com/pw/AP1GczPbyZ2YS9ztK0WVeeAawe8eZeRl2EXR0qHNee-n_Hycw-tKImhwykLwnry9-_dYeStryoNJv0blBp15-hQuEakTj7shGxfpWPD_phI82wNo1IQKtXQGG_Q6xtZpzmkJPFlucpVc12uiAopvDtLyAHmVYw=w812-h1086-s-no-gm?authuser=0', year: 2025, month: 1, date:"2025-01-24", description:"Posando" },
{ id: 30, url: 'https://lh3.googleusercontent.com/pw/AP1GczMIRbjNppkfpWr-Y_k5M5NhW_hLgRT1NoLE4m_jvCp87rBwy6a-xzZB_RqIwxM5ZeG0KDHHaAcX4QW7xL_-bE9WByD45u8r-mrTESzECgEhDwb2GYZtsiBDLGok7fKj1se8zbfJ87nQmLgDJGBCVBFVcg=w812-h1086-s-no-gm?authuser=0', year: 2025, month: 2, date:"2025-02-01", description:"Pasando la tarde en los pile" },
{ id: 31, url: 'https://lh3.googleusercontent.com/pw/AP1GczNrXOAlwtR8KABHe-SfXRVfqjjvw9n84J8Xpekv1-v4Hi2bcQMgosYOC4ZbAjhHAWgrBBSiUFPMRMoojwctocmK46Ux9ehjAEDmp3RKRsmoaaZMCzs-NECz_VQwSpQjRqri9ChT9O2X4hMyLLugMfoVdw=w814-h1086-s-no-gm?authuser=0', year: 2025, month: 3, date:"2025-03-14", description:"Que feliz estoy!" },
{ id: 32, url: 'https://lh3.googleusercontent.com/pw/AP1GczOdaG3OKNyNKtqTtckFh5tI141DlFWcl-kH9oAjpji9iZZ3JhaJt88rVWX4rNnJyu8qybb4bw0xyTcGVAtwBX_RS5_HZ5dPghBjdSr85CJl2I3t-8gsbp3We1ZalMop86qx9rWxrJSYsPvqZYyTk1dc9g=w724-h1086-s-no-gm?authuser=0', year: 2025, month: 4, date:"2025-04-01", description:"Que mirá bobo" },
{ id: 33, url: 'https://lh3.googleusercontent.com/pw/AP1GczP9KCDN6qSQx63FFI2k4iCBVB823RvWcJ31kB53AE3rKpQThR1NTqbddwQIB-yMytO9KuKzs9I1wPmjPvD4-rv5POeziMI7Mwvzc8BC4jT31IjNk7G1498I5hz4tG9yWs6OJ6RiltvICSxJg7ErR9yC0w=w812-h1086-s-no-gm?authuser=0', year: 2025, month: 5, date:"2025-05-03", description:"Felicidad" },
];

export interface Month {
  id: number;
  name: string;
}

export const months: Month[] = [
  {id:0, name:"Todos"},
  {id:1, name:"Enero"},
  {id:2, name:"Febrero"},
  {id:3, name:"Marzo"},
  {id:4, name:"Abril"},
  {id:5, name:"Mayo"},
  {id:6, name:"Junio"},
  {id:7, name:"Julio"},
  {id:8, name:"Agosto"},
  {id:9, name:"Septiembre"},
  {id:10, name:"Octubre"},
  {id:11, name:"Noviembre"},
  {id:12, name:"Diciembre"},
]
export interface Year {
  id: number;
  year: string;
}

export const years: Year[] = [
  {id: 0, year: "Todos"},
  {id: 2022, year: "2022"},
  {id: 2023, year: "2023"},
  {id: 2024, year: "2024"},
  {id: 2025, year: "2025"},
]