

function test() {
  const data = [1, 3, 4, 5];
  return data.reduce((p, c) => p + c, 0)
}

const result = test()

print(result);

module.exports = result