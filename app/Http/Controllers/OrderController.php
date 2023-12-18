<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\OrderCreateRequest;
use App\Http\Requests\OrderUpdateRequest;
use App\Repository\OrderRepository;
use App\Models\Order;
use App\Interfaces\OrderRepositoryInterface;

class OrderController extends Controller
{
    protected OrderRepository $orderRepository;
    private $field = ['id', 'account_id', 'date','total'];

    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    public function index(Request $request)
    {
        $data = $this->orderRepository->get($request->limit, $request->page, $request->search, $request->order_by, $request->order, $request->columns);
        if (!$data) {
            return response()->json(['error' => 'Order not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json(['data' => $data], Response::HTTP_OK);
    }

    public function create()
    {
        return view('order.create');
    }

    public function store(OrderRepository $request)
    {
        $data = $request->only($this->field);
        // $data['password'] = bcrypt($data['password']);
        $order = $this->orderRepository->create($data);
        if (!$order) {
            return response()->json(['error' => 'Order not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json(['data' => $order], Response::HTTP_CREATED);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = $this->orderRepository->getById($id);
        if (!$order) {
            return response()->json(['error' => 'Account not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json(['data' => $order], Response::HTTP_OK);
    }
    public function edit($id)
    {
        $order = $this->orderRepository->find($id);
        return view('order.edit', compact('order'));
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\OrderUpdateRequest  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(OrderUpdateRequest $request, $id)
    {
        $order = $this->orderRepository->getById($id);
        if (!$order) {
            return response()->json(['error' => 'Order not found'], Response::HTTP_NOT_FOUND);
        }
        $order = $request->only($this->field);
        return response()->json(['data' => $this->orderRepository->update($order, $id)], Response::HTTP_OK);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // $company = $request->only($this->field);
        $order = $this->orderRepository->getById($id);
        if (!$order) {
            return response()->json(['error' => 'Order not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json(['data' => $this->orderRepository->delete($id)], Response::HTTP_NO_CONTENT);
    }
}
