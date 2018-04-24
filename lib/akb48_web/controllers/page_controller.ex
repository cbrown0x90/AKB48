defmodule Akb48Web.PageController do
  use Akb48Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
