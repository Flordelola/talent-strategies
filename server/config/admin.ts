// Function to generate preview pathname based on content type and document
const getPreviewPathname = (uid:any, { document } : {document: any}): string => {
  const { slug } = document;
  
  switch (uid) {
    // Handle pages with predefined routes
    case "api::page.page":
      switch (slug) {
        case "intro":
          return "/intro";
        case "about":
          return "/about";
        case "my-services":
          return "/my-services";
      }
    default: {
      return null;
    }
  }
};



export default ({ env } : {env: any})  => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  upload: {
    config: {
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
    },
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: env("CLIENT_URL"), 
      async handler(uid, { documentId }) {
        const document = await strapi.documents(uid).findOne({ documentId });
        const pathname = getPreviewPathname(uid, { document });

        // Disable preview if the pathname is not found
        if (!pathname) {
          return null;
        }
        return `${env("CLIENT_URL")}/${pathname}`;
      },
    }
  }
});


