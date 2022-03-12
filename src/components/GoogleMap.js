import React from "react"

const GoogleMap = () => (
  <div style={{ height: "100vh", width: "100%" }}>
    <iframe
      width={"100%"}
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:EiMyMjQyNCBVUy0zMSwgVGhvcnNieSwgQUwgMzUxNzEsIFVTQSJSElAKNAoyCUcrHMgVzo6IEY9iGXjHHF7iGh4LEO7B7qEBGhQKEgkpjAPf3s-OiBEAFEKr-EjHtgwQmK8BKhQKEgnBZEowTGZkiBFVYi2fG14FuQ&key=AIzaSyA6JMigByIjs4Fk3KOVQT53LwIoO4aUdsg"
    ></iframe>
  </div>
)

export default GoogleMap
