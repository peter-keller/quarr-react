import MetaTags from "react-meta-tags";
import MetaImage from "../../Assets/img/ls.jpg";
import React, { Fragment } from "react";
import SingleArtistPage from "./SingleArtistPage";

const SingleArtistSite = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Artists - Quarr Gallery</title>
        <meta
          name="description"
          content="We sell on behalf of the artists who remain the owners until their work is purchased. This means you are buying from the artist at the price they have set. We do not buy art and resell it. "
        />
        <meta property="og:title" content="Quarr Gallery in Swanage, Dorset" />
        <meta property="og:image" content={MetaImage} />
        <meta property="og:site_name" content="Quarr Gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.quarrgallery.com/artists" />
      </MetaTags>
      <SingleArtistPage />
    </Fragment>
  );
};

export default SingleArtistSite;
