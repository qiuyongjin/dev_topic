export default async () => {
  let abc = (str) => {
    return 'hello' + str;
  };
  let res = await abc('world');
  console.log(res);
}
