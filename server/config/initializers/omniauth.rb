Rails.application.config.middleware.use OmniAuth::Builder do
  provider :slack, 'API_KEY', 'API_SECRET', scope: 'identity.basic'
end

# TODO: Replace 'API_KEY' and 'API_SECRET' with the appropriate values
