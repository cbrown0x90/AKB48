# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :akb48,
  ecto_repos: [Akb48.Repo]

# Configures the endpoint
config :akb48, Akb48Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "pJvd5xnHRp9al1q7bfg28ETHlziVs/FAFbpi9i1fmkv/yQtfWtbyPW/1K5Snk6cj",
  render_errors: [view: Akb48Web.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Akb48.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
