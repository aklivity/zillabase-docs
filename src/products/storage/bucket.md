
# Managing Bucket

A bucket is an equivalent of a folder. It is a logical grouping that can hold a collection of objects. The following actions are supported for managing buckets in Zillabase:

## List All Buckets

To list all available buckets, call the `GET /storage/buckets` endpoint. If it succeeds, it will return an array of bucket names.

```sh
curl http://localhost:7184/v1/storage/buckets

# response
# ["bucket-1", "bucket-2"]
```

## Create a Bucket

To create a bucket, call the `POST /storage/buckets/{bucket-name}` endpoint. If it succeeds, it will return a 204 response code.

```sh
curl http://localhost:7184/v1/storage/buckets/{bucket-name} \
 --request POST
```

::: info
Replace the `{bucket-name}` with the name of the bucket you want to create.
:::

## Delete a Bucket

To delete a bucket, call the `POST /storage/buckets/{bucket-name}` endpoint. If it succeeds, it will return a 204 response code.

```sh
curl http://localhost:7184/v1/storage/buckets/{bucket-name} \
 --request DELETE
```

::: info
Replace the `{bucket-name}` with the name of the bucket you want to delete.
:::
