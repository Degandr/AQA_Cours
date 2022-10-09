const salat = new Map<string, number>();

salat.set("ogurci", 300);
salat.set("pomidory", 200);
salat.set("sol", 10);
salat.set("smetana", 110);

for (const smth of salat) {
  if (smth[1] > 100) {
    console.log(smth[0]);
  }
}
