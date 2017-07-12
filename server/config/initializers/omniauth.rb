Rails.application.config.middleware.use OmniAuth::Builder do
  provider :slack, '2727337933.211352935332', 'f4e1856f6a0d49a1c34c3c0eca6249ad', scope: 'identity.basic'
end
