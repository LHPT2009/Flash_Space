const a = {
  status: {
    code: 10000,
    description: "Ok",
    req_id: "3e9520ca753e4c2d06fb7d0f8d3323b9",
  },
  workflow: {
    id: "workflow-ce9e39",
    app_id: "0865562385",
    created_at: "2023-06-19T18:23:19.948290Z",
    metadata: {},
    visibility: { gettable: 50 },
    user_id: "xr8wnea3q40f",
    modified_at: "2023-06-19T18:38:19.803853Z",
    version: { id: "2894de32206d4cd482f564cecee6e460" },
    use_cases: [],
    check_consents: [],
  },
  results: [
    {
      status: { code: 10000, description: "Ok" },
      input: {
        id: "b73d117057d5451f9f474bf5d71a924d",
        data: {
          image: {
            url: "https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg",
          },
        },
      },
      outputs: [
        {
          id: "465556f6968b44c88c9d71b4a7442219",
          status: { code: 10000, description: "Ok" },
          created_at: "2023-06-19T18:43:58.025581715Z",
          model: {
            id: "moderation-recognition",
            name: "Image Moderation",
            created_at: "2017-05-16T19:20:38.733764Z",
            modified_at: "2023-06-06T19:01:18.757516Z",
            app_id: "main",
            model_version: {
              id: "aa8be956dbaa4b7a858826a84253cab9",
              created_at: "2017-10-31T16:30:31.226185Z",
              status: {
                code: 21100,
                description: "Model is trained and ready",
              },
              visibility: { gettable: 50 },
              app_id: "main",
              user_id: "clarifai",
              metadata: {},
            },
            user_id: "clarifai",
            model_type_id: "visual-classifier",
            visibility: { gettable: 50 },
            toolkits: [],
            use_cases: [],
            languages: [],
            languages_full: [],
            check_consents: [],
            workflow_recommended: false,
          },
          data: {
            concepts: [
              {
                id: "ai_QD1zClSd",
                name: "safe",
                value: 0.99981356,
                app_id: "main",
              },
              {
                id: "ai_RtXh5qkR",
                name: "suggestive",
                value: 0.00018502751,
                app_id: "main",
              },
              {
                id: "ai_V76bvrtj",
                name: "explicit",
                value: 9.753276e-7,
                app_id: "main",
              },
              {
                id: "ai_8QQwMjQR",
                name: "drug",
                value: 3.7710223e-7,
                app_id: "main",
              },
              {
                id: "ai_kBBGf7r8",
                name: "gore",
                value: 3.301785e-8,
                app_id: "main",
              },
            ],
          },
        },
      ],
    },
  ],
};
