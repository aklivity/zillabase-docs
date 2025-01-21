
# Managing Object

A key uniquely identifies an object. If a bucket is equivalent to a folder, then an object is equivalent to a file. The following actions are supported for managing objects in Zillabase:

::: info
The object endpoint requires `{bucket-name}` and `{file-name}` values in the request path.

- Replace the `{bucket-name}` with the name of the bucket you want to refer to.
- Replace the `{file-name}` with the name of the object you wish to refer to.
:::

## List All Objects in a Bucket

To list all objects in a bucket, call the `GET /storage/buckets/{bucket-name}` endpoint. If it succeeds, it will return an array of object metadata.

```sh
curl http://localhost:7184/v1/storage/objects/{bucket-name}

# response
# [ {"name": "example.jpg", "type": "file" }] 
```

## Retrieve an Object

Call the `GET /storage/buckets/{bucket-name}/{file-name}` endpoint to retrieve an object. If it succeeds, it will return the object. The response type header will depend on the file type, and the response body will return the binary contents of the object.

```sh
curl http://localhost:7184/v1/storage/objects/{bucket-name}/{file-name}
```

## Create an Object

To create an object, call the `POST /storage/buckets/{bucket-name}/{file-name}` endpoint. If it succeeds, it will return a 204 response status code.

```sh
FILE_PATH="/path/to/your/file"
curl -X POST \
 -H "Content-Type: $(file -b --mime-type $FILE_PATH)" \
  --data-binary "@$FILE_PATH" \
 http://localhost:7184/v1/storage/objects/{bucket-name}/{file-name}
```

::: info
Replace the `/path/to/your/file` with the actual path of the file that you want to upload.
:::

## Update an Object

To update an object, call the `PUT /storage/buckets/{bucket-name}/{file-name}` endpoint. If it succeeds, it will return a 200 response status code.

```sh
FILE_PATH="/path/to/your/file"
curl -X PUT \
 -H "Content-Type: $(file -b --mime-type $FILE_PATH)" \
  -H "etag: OBJECT_ETAG" \
 --data-binary "@$FILE_PATH" \
  http://localhost:7184/v1/storage/objects/{bucket-name}/{file-name}
```

::: info

- Replace the `/path/to/your/file` with the actual path of the file that you want to upload.
- An etag header is required. This value is a unique identifier (usually a hash) for the current state or version of the object in the bucket. It is used to verify whether the object has been modified since the client last retrieved it.
:::

## Delete an Object

Call  the `DELETE /storage/buckets/{bucket-name}/{file-name}` endpoint to delete an object. If it succeeds, it will return a 204 response status code.

```sh
curl http://localhost:7184/v1/storage/objects/{bucket-name}/{file-name} \
 --request DELETE
```
