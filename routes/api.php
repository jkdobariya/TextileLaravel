<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/login', [AuthController::class, 'login']);
// Route::resource('/group','App\Http\Controllers\GroupController', ['names' => 'group']);



Route::resource('account','App\Http\Controllers\AccountController', ['names' => 'account']);
Route::middleware(['auth:sanctum'])->group(function () {
Route::resource('group','App\Http\Controllers\GroupController', ['names' => 'group']);
Route::resource('income-expense/role','App\Http\Controllers\IncomeExpenseController', ['names' => 'income.expense']);
Route::resource('category','App\Http\Controllers\CategoryController', ['names' => 'categories']);
Route::resource('order/item','App\Http\Controllers\OrderItemController', ['names' => 'order.items']);
Route::resource('order','App\Http\Controllers\OrderController', ['names' => 'order']);
Route::resource('products','App\Http\Controllers\ProductController', ['names' => 'products']);
Route::resource('stock','App\Http\Controllers\StockController', ['names' => 'stock']);
Route::resource('store','App\Http\Controllers\StoreController', ['names' => 'store']);
Route::resource('stores/order','App\Http\Controllers\StoreOrderController', ['names' => 'stores.order']);
Route::resource('user','App\Http\Controllers\UserController', ['names' => 'user']);
Route::resource('users/role','App\Http\Controllers\UserRoleController', ['names' => 'users.role']);
Route::get('purchase', [App\Http\Controllers\StockController::class, 'purchase'])->name('purchase');
Route::get('report/inventory', [App\Http\Controllers\StockController::class, 'inventory'])->name('stock.inventory');
Route::get('sell', [App\Http\Controllers\StockController::class, 'sell'])->name('sell');
Route::post('range', [App\Http\Controllers\StockController::class, 'range'])->name('range');
});