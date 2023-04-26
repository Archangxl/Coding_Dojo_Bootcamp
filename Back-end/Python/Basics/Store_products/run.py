import product
import store

lowes = store.Store("Lowes")
wrench = product.Product("wrench", 4, "tools")

socket_wrench = product.Product("socket wrench", 6, "tools")

socket_wrench.update_price(0.5, True).update_price(0.5, False)

lowes.add_product("wrench", wrench).add_product("socket wrench", socket_wrench).inflation(0.2).set_clearance("tools", 0.3)

lowes.show_product_list()