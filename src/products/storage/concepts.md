
# Storage in Zillabase

Zillabase provides an endpoint for uploading and managing files through an object storage system. This system is structured into buckets, which act as containers for organizing and storing data. Each bucket is a logical grouping that can hold a collection of objects representing a file or a piece of data. These objects are uniquely identified within their respective buckets by a key, which serves as an identifier similar to a filename.

Currently, Zillabase's object storage is implemented by utilizing Docker volume. Zillabase provides UI functionality to manage storage within the Zillabase Admin dashboard. However, the API endpoint is also available. The Zillabase Admin server manages the API for storage feature. By default, it is served under the following url:

```text
http://localhost:7184/v1
```
