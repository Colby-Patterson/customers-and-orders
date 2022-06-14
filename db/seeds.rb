# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

c1 = Customer.create(name: 'John Peterson', address: '1234 River Road')
c2 = Customer.create(name: 'Jake Johanson', address: '1234 Robin Road')

c1.orders.create(product_name: 'Computer Mouse', quantity: 1, total_price: 22.99)
c1.orders.create(product_name: 'Dog Food', quantity: 2, total_price: 51.95)
c2.orders.create(product_name: 'Lens Cloth', quantity: 10, total_price: 10.99)