from flask import Flask, jsonify, request

app = Flask(__name__)

# Mock product data
products = [
    {"id": 1, "name": "Coffee Bean Caffeine Eye Cream"},
    {"id": 2, "name": "Facial Toner"},
    {"id": 3, "name": "Bio-shroom Rejuvenating Serum"},
    {"id": 4, "name": "Facial Cleanser"},
    # Add more products here
]

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query', '').lower()
    results = [product for product in products if query in product['name'].lower()]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
