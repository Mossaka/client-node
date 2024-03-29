const tikv = require("../tikv_client/asynchronous");

(async () => {
  const client = await new tikv.RawClient("127.0.0.1:2379");
  await client.put("k1", "v1", "default");
  await client.put("k2", "v2", "default");
  await client.put("k3", "v3", "default");
  await client.put("k4", "v4", "default");
  value = await client.get("k1", "default");
  console.log(value.toString());
  value = await client.get("k2", "default");
  console.log(value.toString());
  value = await client.get("k3", "default");
  console.log(value.toString());
  await client.delete("k4", "default");
  await client.get("k4", "default");

  await client.batch_put(
    [
      ["k5", "v5"],
      ["k6", "v6"],
    ],
    "default"
  );
  await client.batch_delete(["k1", "k2", "k5"], "default");
  values = await client.batch_get(
    ["k1", "k2", "k3", "k4", "k5", "k6"],
    "default"
  );

  console.log(values);
})();

