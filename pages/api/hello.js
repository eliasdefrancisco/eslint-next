// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler (req, res) {
  res.status(200).json({ name: 'John Doe' })

  if (res) console.log('hola')
  else {
    console.log('ello')
  }

  const ee = [
    1,
    2,
    3,
    4
  ]
  console.log(ee)

  res
  .status(200)
  .json({
    name: 'John Doe'
  })
  .toString()

  const { aa, bb, cc } = test()

  try {
    const ff = test()
    console.log(ff)
  }
  catch (err) {
    console.log(err)
  }
  finally {
    console.log('ole')
  }

  const dd = aa
    ? 22
    : bb
      ? 11
      : cc
        ? 55
        : 34
  console.log(dd)
}

function test (
  ss,
  ff,
  bb,
) {
  return ({ ss, ff, bb })
}
