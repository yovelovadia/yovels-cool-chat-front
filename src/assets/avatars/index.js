function importAll(r) {
  return r.keys().map(r);
}

const avatars = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

export default avatars;
