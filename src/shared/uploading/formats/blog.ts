export default function imgPostFormat(fileName: string) {
  // return posts/{today day}-{today month}/fileName
  return `posts/${new Date().getDate()}-${new Date().getMonth()}/${fileName}`;
}
