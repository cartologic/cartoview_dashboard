/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "f3f47d544ee13cbaede7";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"legend-widget": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/legend-widget.jsx","commons","vendors~aggregate-widget~charts-widget~identify-widget~legend-widget~map-widget"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ol/layer/Image.js":
/*!****************************************!*\
  !*** ./node_modules/ol/layer/Image.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayerType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LayerType.js */ "./node_modules/ol/LayerType.js");
/* harmony import */ var _layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layer/Layer.js */ "./node_modules/ol/layer/Layer.js");
/**
 * @module ol/layer/Image
 */




/**
 * @typedef {Object} Options
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {module:ol/extent~Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex=0] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {module:ol/PluggableMap} [map] Sets the layer as overlay on a map. The map will not manage
 * this layer in its layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it managed by the map is to
 * use {@link module:ol/Map#addLayer}.
 * @property {module:ol/source/Image} [source] Source for this layer.
 */


/**
 * @classdesc
 * Server-rendered images that are available for arbitrary extents and
 * resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @fires module:ol/render/Event~RenderEvent
 * @api
 */
var ImageLayer = (function (Layer) {
  function ImageLayer(opt_options) {
    var options = opt_options ? opt_options : {};
    Layer.call(this, options);

    /**
     * The layer type.
     * @protected
     * @type {module:ol/LayerType}
     */
    this.type = _LayerType_js__WEBPACK_IMPORTED_MODULE_0__["default"].IMAGE;

  }

  if ( Layer ) ImageLayer.__proto__ = Layer;
  ImageLayer.prototype = Object.create( Layer && Layer.prototype );
  ImageLayer.prototype.constructor = ImageLayer;

  return ImageLayer;
}(_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/**
 * Return the associated {@link module:ol/source/Image source} of the image layer.
 * @function
 * @return {module:ol/source/Image} Source.
 * @api
 */
ImageLayer.prototype.getSource;
/* harmony default export */ __webpack_exports__["default"] = (ImageLayer);

//# sourceMappingURL=Image.js.map

/***/ }),

/***/ "./node_modules/ol/layer/Tile.js":
/*!***************************************!*\
  !*** ./node_modules/ol/layer/Tile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayerType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LayerType.js */ "./node_modules/ol/LayerType.js");
/* harmony import */ var _layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layer/Layer.js */ "./node_modules/ol/layer/Layer.js");
/* harmony import */ var _layer_TileProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layer/TileProperty.js */ "./node_modules/ol/layer/TileProperty.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obj.js */ "./node_modules/ol/obj.js");
/**
 * @module ol/layer/Tile
 */






/**
 * @typedef {Object} Options
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {module:ol/extent~Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex=0] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [preload=0] Preload. Load low-resolution tiles up to `preload` levels. `0`
 * means no preloading.
 * @property {module:ol/source/Tile} [source] Source for this layer.
 * @property {module:ol/PluggableMap} [map] Sets the layer as overlay on a map. The map will not manage
 * this layer in its layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it managed by the map is to
 * use {@link module:ol/Map#addLayer}.
 * @property {boolean} [useInterimTilesOnError=true] Use interim tiles on error.
 */

/**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @api
 */
var TileLayer = (function (Layer) {
  function TileLayer(opt_options) {
    var options = opt_options ? opt_options : {};

    var baseOptions = Object(_obj_js__WEBPACK_IMPORTED_MODULE_3__["assign"])({}, options);

    delete baseOptions.preload;
    delete baseOptions.useInterimTilesOnError;
    Layer.call(this, baseOptions);

    this.setPreload(options.preload !== undefined ? options.preload : 0);
    this.setUseInterimTilesOnError(options.useInterimTilesOnError !== undefined ?
      options.useInterimTilesOnError : true);

    /**
    * The layer type.
    * @protected
    * @type {module:ol/LayerType}
    */
    this.type = _LayerType_js__WEBPACK_IMPORTED_MODULE_0__["default"].TILE;

  }

  if ( Layer ) TileLayer.__proto__ = Layer;
  TileLayer.prototype = Object.create( Layer && Layer.prototype );
  TileLayer.prototype.constructor = TileLayer;

  /**
  * Return the level as number to which we will preload tiles up to.
  * @return {number} The level to preload tiles up to.
  * @observable
  * @api
  */
  TileLayer.prototype.getPreload = function getPreload () {
    return /** @type {number} */ (this.get(_layer_TileProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"].PRELOAD));
  };

  /**
  * Set the level as number to which we will preload tiles up to.
  * @param {number} preload The level to preload tiles up to.
  * @observable
  * @api
  */
  TileLayer.prototype.setPreload = function setPreload (preload) {
    this.set(_layer_TileProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"].PRELOAD, preload);
  };

  /**
  * Whether we use interim tiles on error.
  * @return {boolean} Use interim tiles on error.
  * @observable
  * @api
  */
  TileLayer.prototype.getUseInterimTilesOnError = function getUseInterimTilesOnError () {
    return /** @type {boolean} */ (this.get(_layer_TileProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_INTERIM_TILES_ON_ERROR));
  };

  /**
  * Set whether we use interim tiles on error.
  * @param {boolean} useInterimTilesOnError Use interim tiles on error.
  * @observable
  * @api
  */
  TileLayer.prototype.setUseInterimTilesOnError = function setUseInterimTilesOnError (useInterimTilesOnError) {
    this.set(_layer_TileProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
  };

  return TileLayer;
}(_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/**
 * Return the associated {@link module:ol/source/Tile tilesource} of the layer.
 * @function
 * @return {module:ol/source/Tile} Source.
 * @api
 */
TileLayer.prototype.getSource;


/* harmony default export */ __webpack_exports__["default"] = (TileLayer);

//# sourceMappingURL=Tile.js.map

/***/ }),

/***/ "./node_modules/ol/layer/TileProperty.js":
/*!***********************************************!*\
  !*** ./node_modules/ol/layer/TileProperty.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @module ol/layer/TileProperty
 */

/**
 * @enum {string}
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  PRELOAD: 'preload',
  USE_INTERIM_TILES_ON_ERROR: 'useInterimTilesOnError'
});

//# sourceMappingURL=TileProperty.js.map

/***/ }),

/***/ "./node_modules/ol/reproj.js":
/*!***********************************!*\
  !*** ./node_modules/ol/reproj.js ***!
  \***********************************/
/*! exports provided: calculateSourceResolution, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateSourceResolution", function() { return calculateSourceResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/ol/dom.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/ol/math.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proj.js */ "./node_modules/ol/proj.js");
/**
 * @module ol/reproj
 */






/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 *
 * @param {module:ol/proj/Projection} sourceProj Source projection.
 * @param {module:ol/proj/Projection} targetProj Target projection.
 * @param {module:ol/coordinate~Coordinate} targetCenter Target center.
 * @param {number} targetResolution Target resolution.
 * @return {number} The best resolution to use. Can be +-Infinity, NaN or 0.
 */
function calculateSourceResolution(sourceProj, targetProj,
  targetCenter, targetResolution) {

  var sourceCenter = Object(_proj_js__WEBPACK_IMPORTED_MODULE_3__["transform"])(targetCenter, targetProj, sourceProj);

  // calculate the ideal resolution of the source data
  var sourceResolution = Object(_proj_js__WEBPACK_IMPORTED_MODULE_3__["getPointResolution"])(targetProj, targetResolution, targetCenter);

  var targetMetersPerUnit = targetProj.getMetersPerUnit();
  if (targetMetersPerUnit !== undefined) {
    sourceResolution *= targetMetersPerUnit;
  }
  var sourceMetersPerUnit = sourceProj.getMetersPerUnit();
  if (sourceMetersPerUnit !== undefined) {
    sourceResolution /= sourceMetersPerUnit;
  }

  // Based on the projection properties, the point resolution at the specified
  // coordinates may be slightly different. We need to reverse-compensate this
  // in order to achieve optimal results.

  var sourceExtent = sourceProj.getExtent();
  if (!sourceExtent || Object(_extent_js__WEBPACK_IMPORTED_MODULE_1__["containsCoordinate"])(sourceExtent, sourceCenter)) {
    var compensationFactor = Object(_proj_js__WEBPACK_IMPORTED_MODULE_3__["getPointResolution"])(sourceProj, sourceResolution, sourceCenter) /
        sourceResolution;
    if (isFinite(compensationFactor) && compensationFactor > 0) {
      sourceResolution /= compensationFactor;
    }
  }

  return sourceResolution;
}


/**
 * Enlarge the clipping triangle point by 1 pixel to ensure the edges overlap
 * in order to mask gaps caused by antialiasing.
 *
 * @param {number} centroidX Centroid of the triangle (x coordinate in pixels).
 * @param {number} centroidY Centroid of the triangle (y coordinate in pixels).
 * @param {number} x X coordinate of the point (in pixels).
 * @param {number} y Y coordinate of the point (in pixels).
 * @return {module:ol/coordinate~Coordinate} New point 1 px farther from the centroid.
 */
function enlargeClipPoint(centroidX, centroidY, x, y) {
  var dX = x - centroidX;
  var dY = y - centroidY;
  var distance = Math.sqrt(dX * dX + dY * dY);
  return [Math.round(x + dX / distance), Math.round(y + dY / distance)];
}


/**
 * Renders the source data into new canvas based on the triangulation.
 *
 * @param {number} width Width of the canvas.
 * @param {number} height Height of the canvas.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} sourceResolution Source resolution.
 * @param {module:ol/extent~Extent} sourceExtent Extent of the data source.
 * @param {number} targetResolution Target resolution.
 * @param {module:ol/extent~Extent} targetExtent Target extent.
 * @param {module:ol/reproj/Triangulation} triangulation
 * Calculated triangulation.
 * @param {Array<{extent: module:ol/extent~Extent,
 *                 image: (HTMLCanvasElement|HTMLImageElement|HTMLVideoElement)}>} sources
 * Array of sources.
 * @param {number} gutter Gutter of the sources.
 * @param {boolean=} opt_renderEdges Render reprojection edges.
 * @return {HTMLCanvasElement} Canvas with reprojected data.
 */
function render(width, height, pixelRatio,
  sourceResolution, sourceExtent, targetResolution, targetExtent,
  triangulation, sources, gutter, opt_renderEdges) {

  var context = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["createCanvasContext2D"])(Math.round(pixelRatio * width),
    Math.round(pixelRatio * height));

  if (sources.length === 0) {
    return context.canvas;
  }

  context.scale(pixelRatio, pixelRatio);

  var sourceDataExtent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_1__["createEmpty"])();
  sources.forEach(function(src, i, arr) {
    Object(_extent_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(sourceDataExtent, src.extent);
  });

  var canvasWidthInUnits = Object(_extent_js__WEBPACK_IMPORTED_MODULE_1__["getWidth"])(sourceDataExtent);
  var canvasHeightInUnits = Object(_extent_js__WEBPACK_IMPORTED_MODULE_1__["getHeight"])(sourceDataExtent);
  var stitchContext = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["createCanvasContext2D"])(
    Math.round(pixelRatio * canvasWidthInUnits / sourceResolution),
    Math.round(pixelRatio * canvasHeightInUnits / sourceResolution));

  var stitchScale = pixelRatio / sourceResolution;

  sources.forEach(function(src, i, arr) {
    var xPos = src.extent[0] - sourceDataExtent[0];
    var yPos = -(src.extent[3] - sourceDataExtent[3]);
    var srcWidth = Object(_extent_js__WEBPACK_IMPORTED_MODULE_1__["getWidth"])(src.extent);
    var srcHeight = Object(_extent_js__WEBPACK_IMPORTED_MODULE_1__["getHeight"])(src.extent);

    stitchContext.drawImage(
      src.image,
      gutter, gutter,
      src.image.width - 2 * gutter, src.image.height - 2 * gutter,
      xPos * stitchScale, yPos * stitchScale,
      srcWidth * stitchScale, srcHeight * stitchScale);
  });

  var targetTopLeft = Object(_extent_js__WEBPACK_IMPORTED_MODULE_1__["getTopLeft"])(targetExtent);

  triangulation.getTriangles().forEach(function(triangle, i, arr) {
    /* Calculate affine transform (src -> dst)
     * Resulting matrix can be used to transform coordinate
     * from `sourceProjection` to destination pixels.
     *
     * To optimize number of context calls and increase numerical stability,
     * we also do the following operations:
     * trans(-topLeftExtentCorner), scale(1 / targetResolution), scale(1, -1)
     * here before solving the linear system so [ui, vi] are pixel coordinates.
     *
     * Src points: xi, yi
     * Dst points: ui, vi
     * Affine coefficients: aij
     *
     * | x0 y0 1  0  0 0 |   |a00|   |u0|
     * | x1 y1 1  0  0 0 |   |a01|   |u1|
     * | x2 y2 1  0  0 0 | x |a02| = |u2|
     * |  0  0 0 x0 y0 1 |   |a10|   |v0|
     * |  0  0 0 x1 y1 1 |   |a11|   |v1|
     * |  0  0 0 x2 y2 1 |   |a12|   |v2|
     */
    var source = triangle.source;
    var target = triangle.target;
    var x0 = source[0][0], y0 = source[0][1];
    var x1 = source[1][0], y1 = source[1][1];
    var x2 = source[2][0], y2 = source[2][1];
    var u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
    var v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
    var u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
    var v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
    var u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
    var v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;

    // Shift all the source points to improve numerical stability
    // of all the subsequent calculations. The [x0, y0] is used here.
    // This is also used to simplify the linear system.
    var sourceNumericalShiftX = x0;
    var sourceNumericalShiftY = y0;
    x0 = 0;
    y0 = 0;
    x1 -= sourceNumericalShiftX;
    y1 -= sourceNumericalShiftY;
    x2 -= sourceNumericalShiftX;
    y2 -= sourceNumericalShiftY;

    var augmentedMatrix = [
      [x1, y1, 0, 0, u1 - u0],
      [x2, y2, 0, 0, u2 - u0],
      [0, 0, x1, y1, v1 - v0],
      [0, 0, x2, y2, v2 - v0]
    ];
    var affineCoefs = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["solveLinearSystem"])(augmentedMatrix);
    if (!affineCoefs) {
      return;
    }

    context.save();
    context.beginPath();
    var centroidX = (u0 + u1 + u2) / 3;
    var centroidY = (v0 + v1 + v2) / 3;
    var p0 = enlargeClipPoint(centroidX, centroidY, u0, v0);
    var p1 = enlargeClipPoint(centroidX, centroidY, u1, v1);
    var p2 = enlargeClipPoint(centroidX, centroidY, u2, v2);

    context.moveTo(p1[0], p1[1]);
    context.lineTo(p0[0], p0[1]);
    context.lineTo(p2[0], p2[1]);
    context.clip();

    context.transform(
      affineCoefs[0], affineCoefs[2], affineCoefs[1], affineCoefs[3], u0, v0);

    context.translate(sourceDataExtent[0] - sourceNumericalShiftX,
      sourceDataExtent[3] - sourceNumericalShiftY);

    context.scale(sourceResolution / pixelRatio,
      -sourceResolution / pixelRatio);

    context.drawImage(stitchContext.canvas, 0, 0);
    context.restore();
  });

  if (opt_renderEdges) {
    context.save();

    context.strokeStyle = 'black';
    context.lineWidth = 1;

    triangulation.getTriangles().forEach(function(triangle, i, arr) {
      var target = triangle.target;
      var u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
      var v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
      var u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
      var v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
      var u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
      var v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;

      context.beginPath();
      context.moveTo(u1, v1);
      context.lineTo(u0, v0);
      context.lineTo(u2, v2);
      context.closePath();
      context.stroke();
    });

    context.restore();
  }
  return context.canvas;
}

//# sourceMappingURL=reproj.js.map

/***/ }),

/***/ "./node_modules/ol/reproj/Image.js":
/*!*****************************************!*\
  !*** ./node_modules/ol/reproj/Image.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/ol/reproj/common.js");
/* harmony import */ var _ImageBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ImageBase.js */ "./node_modules/ol/ImageBase.js");
/* harmony import */ var _ImageState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImageState.js */ "./node_modules/ol/ImageState.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events.js */ "./node_modules/ol/events.js");
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/EventType.js */ "./node_modules/ol/events/EventType.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _reproj_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reproj.js */ "./node_modules/ol/reproj.js");
/* harmony import */ var _reproj_Triangulation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reproj/Triangulation.js */ "./node_modules/ol/reproj/Triangulation.js");
/**
 * @module ol/reproj/Image
 */











/**
 * @typedef {function(module:ol/extent~Extent, number, number) : module:ol/ImageBase} FunctionType
 */


/**
 * @classdesc
 * Class encapsulating single reprojected image.
 * See {@link module:ol/source/Image~ImageSource}.
 */
var ReprojImage = (function (ImageBase) {
  function ReprojImage(sourceProj, targetProj, targetExtent, targetResolution, pixelRatio, getImageFunction) {
    var maxSourceExtent = sourceProj.getExtent();
    var maxTargetExtent = targetProj.getExtent();

    var limitedTargetExtent = maxTargetExtent ?
      Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getIntersection"])(targetExtent, maxTargetExtent) : targetExtent;

    var targetCenter = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getCenter"])(limitedTargetExtent);
    var sourceResolution = Object(_reproj_js__WEBPACK_IMPORTED_MODULE_6__["calculateSourceResolution"])(
      sourceProj, targetProj, targetCenter, targetResolution);

    var errorThresholdInPixels = _common_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_THRESHOLD"];

    var triangulation = new _reproj_Triangulation_js__WEBPACK_IMPORTED_MODULE_7__["default"](
      sourceProj, targetProj, limitedTargetExtent, maxSourceExtent,
      sourceResolution * errorThresholdInPixels);

    var sourceExtent = triangulation.calculateSourceExtent();
    var sourceImage = getImageFunction(sourceExtent, sourceResolution, pixelRatio);
    var state = _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADED;
    if (sourceImage) {
      state = _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].IDLE;
    }
    var sourcePixelRatio = sourceImage ? sourceImage.getPixelRatio() : 1;

    ImageBase.call(this, targetExtent, targetResolution, sourcePixelRatio, state);

    /**
     * @private
     * @type {module:ol/proj/Projection}
     */
    this.targetProj_ = targetProj;

    /**
     * @private
     * @type {module:ol/extent~Extent}
     */
    this.maxSourceExtent_ = maxSourceExtent;

    /**
     * @private
     * @type {!module:ol/reproj/Triangulation}
     */
    this.triangulation_ = triangulation;

    /**
     * @private
     * @type {number}
     */
    this.targetResolution_ = targetResolution;

    /**
     * @private
     * @type {module:ol/extent~Extent}
     */
    this.targetExtent_ = targetExtent;

    /**
     * @private
     * @type {module:ol/ImageBase}
     */
    this.sourceImage_ = sourceImage;

    /**
     * @private
     * @type {number}
     */
    this.sourcePixelRatio_ = sourcePixelRatio;

    /**
     * @private
     * @type {HTMLCanvasElement}
     */
    this.canvas_ = null;

    /**
     * @private
     * @type {?module:ol/events~EventsKey}
     */
    this.sourceListenerKey_ = null;
  }

  if ( ImageBase ) ReprojImage.__proto__ = ImageBase;
  ReprojImage.prototype = Object.create( ImageBase && ImageBase.prototype );
  ReprojImage.prototype.constructor = ReprojImage;

  /**
   * @inheritDoc
   */
  ReprojImage.prototype.disposeInternal = function disposeInternal () {
    if (this.state == _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADING) {
      this.unlistenSource_();
    }
    ImageBase.prototype.disposeInternal.call(this);
  };

  /**
   * @inheritDoc
   */
  ReprojImage.prototype.getImage = function getImage () {
    return this.canvas_;
  };

  /**
   * @return {module:ol/proj/Projection} Projection.
   */
  ReprojImage.prototype.getProjection = function getProjection () {
    return this.targetProj_;
  };

  /**
   * @private
   */
  ReprojImage.prototype.reproject_ = function reproject_ () {
    var sourceState = this.sourceImage_.getState();
    if (sourceState == _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADED) {
      var width = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getWidth"])(this.targetExtent_) / this.targetResolution_;
      var height = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getHeight"])(this.targetExtent_) / this.targetResolution_;

      this.canvas_ = Object(_reproj_js__WEBPACK_IMPORTED_MODULE_6__["render"])(width, height, this.sourcePixelRatio_,
        this.sourceImage_.getResolution(), this.maxSourceExtent_,
        this.targetResolution_, this.targetExtent_, this.triangulation_, [{
          extent: this.sourceImage_.getExtent(),
          image: this.sourceImage_.getImage()
        }], 0);
    }
    this.state = sourceState;
    this.changed();
  };

  /**
   * @inheritDoc
   */
  ReprojImage.prototype.load = function load () {
    if (this.state == _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].IDLE) {
      this.state = _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADING;
      this.changed();

      var sourceState = this.sourceImage_.getState();
      if (sourceState == _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADED || sourceState == _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERROR) {
        this.reproject_();
      } else {
        this.sourceListenerKey_ = Object(_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"])(this.sourceImage_,
          _events_EventType_js__WEBPACK_IMPORTED_MODULE_4__["default"].CHANGE, function(e) {
            var sourceState = this.sourceImage_.getState();
            if (sourceState == _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADED || sourceState == _ImageState_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERROR) {
              this.unlistenSource_();
              this.reproject_();
            }
          }, this);
        this.sourceImage_.load();
      }
    }
  };

  /**
   * @private
   */
  ReprojImage.prototype.unlistenSource_ = function unlistenSource_ () {
    Object(_events_js__WEBPACK_IMPORTED_MODULE_3__["unlistenByKey"])(/** @type {!module:ol/events~EventsKey} */ (this.sourceListenerKey_));
    this.sourceListenerKey_ = null;
  };

  return ReprojImage;
}(_ImageBase_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/* harmony default export */ __webpack_exports__["default"] = (ReprojImage);

//# sourceMappingURL=Image.js.map

/***/ }),

/***/ "./node_modules/ol/reproj/Tile.js":
/*!****************************************!*\
  !*** ./node_modules/ol/reproj/Tile.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/ol/reproj/common.js");
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tile.js */ "./node_modules/ol/Tile.js");
/* harmony import */ var _TileState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileState.js */ "./node_modules/ol/TileState.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events.js */ "./node_modules/ol/events.js");
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/EventType.js */ "./node_modules/ol/events/EventType.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../math.js */ "./node_modules/ol/math.js");
/* harmony import */ var _reproj_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reproj.js */ "./node_modules/ol/reproj.js");
/* harmony import */ var _reproj_Triangulation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reproj/Triangulation.js */ "./node_modules/ol/reproj/Triangulation.js");
/**
 * @module ol/reproj/Tile
 */












/**
 * @typedef {function(number, number, number, number) : module:ol/Tile} FunctionType
 */


/**
 * @classdesc
 * Class encapsulating single reprojected tile.
 * See {@link module:ol/source/TileImage~TileImage}.
 *
 */
var ReprojTile = (function (Tile) {
  function ReprojTile(
    sourceProj,
    sourceTileGrid,
    targetProj,
    targetTileGrid,
    tileCoord,
    wrappedTileCoord,
    pixelRatio,
    gutter,
    getTileFunction,
    opt_errorThreshold,
    opt_renderEdges
  ) {
    var this$1 = this;

    Tile.call(this, tileCoord, _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].IDLE);

    /**
     * @private
     * @type {boolean}
     */
    this.renderEdges_ = opt_renderEdges !== undefined ? opt_renderEdges : false;

    /**
     * @private
     * @type {number}
     */
    this.pixelRatio_ = pixelRatio;

    /**
     * @private
     * @type {number}
     */
    this.gutter_ = gutter;

    /**
     * @private
     * @type {HTMLCanvasElement}
     */
    this.canvas_ = null;

    /**
     * @private
     * @type {module:ol/tilegrid/TileGrid}
     */
    this.sourceTileGrid_ = sourceTileGrid;

    /**
     * @private
     * @type {module:ol/tilegrid/TileGrid}
     */
    this.targetTileGrid_ = targetTileGrid;

    /**
     * @private
     * @type {module:ol/tilecoord~TileCoord}
     */
    this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;

    /**
     * @private
     * @type {!Array<module:ol/Tile>}
     */
    this.sourceTiles_ = [];

    /**
     * @private
     * @type {Array<module:ol/events~EventsKey>}
     */
    this.sourcesListenerKeys_ = null;

    /**
     * @private
     * @type {number}
     */
    this.sourceZ_ = 0;

    var targetExtent = targetTileGrid.getTileCoordExtent(this.wrappedTileCoord_);
    var maxTargetExtent = this.targetTileGrid_.getExtent();
    var maxSourceExtent = this.sourceTileGrid_.getExtent();

    var limitedTargetExtent = maxTargetExtent ?
      Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getIntersection"])(targetExtent, maxTargetExtent) : targetExtent;

    if (Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getArea"])(limitedTargetExtent) === 0) {
      // Tile is completely outside range -> EMPTY
      // TODO: is it actually correct that the source even creates the tile ?
      this.state = _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY;
      return;
    }

    var sourceProjExtent = sourceProj.getExtent();
    if (sourceProjExtent) {
      if (!maxSourceExtent) {
        maxSourceExtent = sourceProjExtent;
      } else {
        maxSourceExtent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getIntersection"])(maxSourceExtent, sourceProjExtent);
      }
    }

    var targetResolution = targetTileGrid.getResolution(
      this.wrappedTileCoord_[0]);

    var targetCenter = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getCenter"])(limitedTargetExtent);
    var sourceResolution = Object(_reproj_js__WEBPACK_IMPORTED_MODULE_7__["calculateSourceResolution"])(
      sourceProj, targetProj, targetCenter, targetResolution);

    if (!isFinite(sourceResolution) || sourceResolution <= 0) {
      // invalid sourceResolution -> EMPTY
      // probably edges of the projections when no extent is defined
      this.state = _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY;
      return;
    }

    var errorThresholdInPixels = opt_errorThreshold !== undefined ?
      opt_errorThreshold : _common_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_THRESHOLD"];

    /**
     * @private
     * @type {!module:ol/reproj/Triangulation}
     */
    this.triangulation_ = new _reproj_Triangulation_js__WEBPACK_IMPORTED_MODULE_8__["default"](
      sourceProj, targetProj, limitedTargetExtent, maxSourceExtent,
      sourceResolution * errorThresholdInPixels);

    if (this.triangulation_.getTriangles().length === 0) {
      // no valid triangles -> EMPTY
      this.state = _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY;
      return;
    }

    this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
    var sourceExtent = this.triangulation_.calculateSourceExtent();

    if (maxSourceExtent) {
      if (sourceProj.canWrapX()) {
        sourceExtent[1] = Object(_math_js__WEBPACK_IMPORTED_MODULE_6__["clamp"])(
          sourceExtent[1], maxSourceExtent[1], maxSourceExtent[3]);
        sourceExtent[3] = Object(_math_js__WEBPACK_IMPORTED_MODULE_6__["clamp"])(
          sourceExtent[3], maxSourceExtent[1], maxSourceExtent[3]);
      } else {
        sourceExtent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getIntersection"])(sourceExtent, maxSourceExtent);
      }
    }

    if (!Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getArea"])(sourceExtent)) {
      this.state = _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY;
    } else {
      var sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(
        sourceExtent, this.sourceZ_);

      for (var srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
        for (var srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
          var tile = getTileFunction(this$1.sourceZ_, srcX, srcY, pixelRatio);
          if (tile) {
            this$1.sourceTiles_.push(tile);
          }
        }
      }

      if (this.sourceTiles_.length === 0) {
        this.state = _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY;
      }
    }
  }

  if ( Tile ) ReprojTile.__proto__ = Tile;
  ReprojTile.prototype = Object.create( Tile && Tile.prototype );
  ReprojTile.prototype.constructor = ReprojTile;

  /**
   * @inheritDoc
   */
  ReprojTile.prototype.disposeInternal = function disposeInternal () {
    if (this.state == _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADING) {
      this.unlistenSources_();
    }
    Tile.prototype.disposeInternal.call(this);
  };

  /**
   * Get the HTML Canvas element for this tile.
   * @return {HTMLCanvasElement} Canvas.
   */
  ReprojTile.prototype.getImage = function getImage () {
    return this.canvas_;
  };

  /**
   * @private
   */
  ReprojTile.prototype.reproject_ = function reproject_ () {
    var sources = [];
    this.sourceTiles_.forEach(function(tile, i, arr) {
      if (tile && tile.getState() == _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADED) {
        sources.push({
          extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
          image: tile.getImage()
        });
      }
    }.bind(this));
    this.sourceTiles_.length = 0;

    if (sources.length === 0) {
      this.state = _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERROR;
    } else {
      var z = this.wrappedTileCoord_[0];
      var size = this.targetTileGrid_.getTileSize(z);
      var width = typeof size === 'number' ? size : size[0];
      var height = typeof size === 'number' ? size : size[1];
      var targetResolution = this.targetTileGrid_.getResolution(z);
      var sourceResolution = this.sourceTileGrid_.getResolution(this.sourceZ_);

      var targetExtent = this.targetTileGrid_.getTileCoordExtent(
        this.wrappedTileCoord_);
      this.canvas_ = Object(_reproj_js__WEBPACK_IMPORTED_MODULE_7__["render"])(width, height, this.pixelRatio_,
        sourceResolution, this.sourceTileGrid_.getExtent(),
        targetResolution, targetExtent, this.triangulation_, sources,
        this.gutter_, this.renderEdges_);

      this.state = _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADED;
    }
    this.changed();
  };

  /**
   * @inheritDoc
   */
  ReprojTile.prototype.load = function load () {
    if (this.state == _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].IDLE) {
      this.state = _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADING;
      this.changed();

      var leftToLoad = 0;

      this.sourcesListenerKeys_ = [];
      this.sourceTiles_.forEach(function(tile, i, arr) {
        var state = tile.getState();
        if (state == _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].IDLE || state == _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADING) {
          leftToLoad++;

          var sourceListenKey = Object(_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"])(tile, _events_EventType_js__WEBPACK_IMPORTED_MODULE_4__["default"].CHANGE,
            function(e) {
              var state = tile.getState();
              if (state == _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADED ||
                    state == _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERROR ||
                    state == _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY) {
                Object(_events_js__WEBPACK_IMPORTED_MODULE_3__["unlistenByKey"])(sourceListenKey);
                leftToLoad--;
                if (leftToLoad === 0) {
                  this.unlistenSources_();
                  this.reproject_();
                }
              }
            }, this);
          this.sourcesListenerKeys_.push(sourceListenKey);
        }
      }.bind(this));

      this.sourceTiles_.forEach(function(tile, i, arr) {
        var state = tile.getState();
        if (state == _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].IDLE) {
          tile.load();
        }
      });

      if (leftToLoad === 0) {
        setTimeout(this.reproject_.bind(this), 0);
      }
    }
  };

  /**
   * @private
   */
  ReprojTile.prototype.unlistenSources_ = function unlistenSources_ () {
    this.sourcesListenerKeys_.forEach(_events_js__WEBPACK_IMPORTED_MODULE_3__["unlistenByKey"]);
    this.sourcesListenerKeys_ = null;
  };

  return ReprojTile;
}(_Tile_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/* harmony default export */ __webpack_exports__["default"] = (ReprojTile);

//# sourceMappingURL=Tile.js.map

/***/ }),

/***/ "./node_modules/ol/reproj/Triangulation.js":
/*!*************************************************!*\
  !*** ./node_modules/ol/reproj/Triangulation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math.js */ "./node_modules/ol/math.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");
/**
 * @module ol/reproj/Triangulation
 */





/**
 * Single triangle; consists of 3 source points and 3 target points.
 * @typedef {Object} Triangle
 * @property {Array<module:ol/coordinate~Coordinate>} source
 * @property {Array<module:ol/coordinate~Coordinate>} target
 */


/**
 * Maximum number of subdivision steps during raster reprojection triangulation.
 * Prevents high memory usage and large number of proj4 calls (for certain
 * transformations and areas). At most `2*(2^this)` triangles are created for
 * each triangulated extent (tile/image).
 * @type {number}
 */
var MAX_SUBDIVISION = 10;


/**
 * Maximum allowed size of triangle relative to world width. When transforming
 * corners of world extent between certain projections, the resulting
 * triangulation seems to have zero error and no subdivision is performed. If
 * the triangle width is more than this (relative to world width; 0-1),
 * subdivison is forced (up to `MAX_SUBDIVISION`). Default is `0.25`.
 * @type {number}
 */
var MAX_TRIANGLE_WIDTH = 0.25;


/**
 * @classdesc
 * Class containing triangulation of the given target extent.
 * Used for determining source data and the reprojection itself.
 */
var Triangulation = function Triangulation(sourceProj, targetProj, targetExtent, maxSourceExtent, errorThreshold) {

  /**
   * @type {module:ol/proj/Projection}
   * @private
   */
  this.sourceProj_ = sourceProj;

  /**
   * @type {module:ol/proj/Projection}
   * @private
   */
  this.targetProj_ = targetProj;

  /** @type {!Object<string, module:ol/coordinate~Coordinate>} */
  var transformInvCache = {};
  var transformInv = Object(_proj_js__WEBPACK_IMPORTED_MODULE_2__["getTransform"])(this.targetProj_, this.sourceProj_);

  /**
   * @param {module:ol/coordinate~Coordinate} c A coordinate.
   * @return {module:ol/coordinate~Coordinate} Transformed coordinate.
   * @private
   */
  this.transformInv_ = function(c) {
    var key = c[0] + '/' + c[1];
    if (!transformInvCache[key]) {
      transformInvCache[key] = transformInv(c);
    }
    return transformInvCache[key];
  };

  /**
   * @type {module:ol/extent~Extent}
   * @private
   */
  this.maxSourceExtent_ = maxSourceExtent;

  /**
   * @type {number}
   * @private
   */
  this.errorThresholdSquared_ = errorThreshold * errorThreshold;

  /**
   * @type {Array<module:ol/reproj/Triangulation~Triangle>}
   * @private
   */
  this.triangles_ = [];

  /**
   * Indicates that the triangulation crosses edge of the source projection.
   * @type {boolean}
   * @private
   */
  this.wrapsXInSource_ = false;

  /**
   * @type {boolean}
   * @private
   */
  this.canWrapXInSource_ = this.sourceProj_.canWrapX() &&
      !!maxSourceExtent &&
      !!this.sourceProj_.getExtent() &&
      (Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getWidth"])(maxSourceExtent) == Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getWidth"])(this.sourceProj_.getExtent()));

  /**
   * @type {?number}
   * @private
   */
  this.sourceWorldWidth_ = this.sourceProj_.getExtent() ?
    Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getWidth"])(this.sourceProj_.getExtent()) : null;

  /**
   * @type {?number}
   * @private
   */
  this.targetWorldWidth_ = this.targetProj_.getExtent() ?
    Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getWidth"])(this.targetProj_.getExtent()) : null;

  var destinationTopLeft = Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getTopLeft"])(targetExtent);
  var destinationTopRight = Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getTopRight"])(targetExtent);
  var destinationBottomRight = Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getBottomRight"])(targetExtent);
  var destinationBottomLeft = Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getBottomLeft"])(targetExtent);
  var sourceTopLeft = this.transformInv_(destinationTopLeft);
  var sourceTopRight = this.transformInv_(destinationTopRight);
  var sourceBottomRight = this.transformInv_(destinationBottomRight);
  var sourceBottomLeft = this.transformInv_(destinationBottomLeft);

  this.addQuad_(
    destinationTopLeft, destinationTopRight,
    destinationBottomRight, destinationBottomLeft,
    sourceTopLeft, sourceTopRight, sourceBottomRight, sourceBottomLeft,
    MAX_SUBDIVISION);

  if (this.wrapsXInSource_) {
    var leftBound = Infinity;
    this.triangles_.forEach(function(triangle, i, arr) {
      leftBound = Math.min(leftBound,
        triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]);
    });

    // Shift triangles to be as close to `leftBound` as possible
    // (if the distance is more than `worldWidth / 2` it can be closer.
    this.triangles_.forEach(function(triangle) {
      if (Math.max(triangle.source[0][0], triangle.source[1][0],
        triangle.source[2][0]) - leftBound > this.sourceWorldWidth_ / 2) {
        var newTriangle = [[triangle.source[0][0], triangle.source[0][1]],
          [triangle.source[1][0], triangle.source[1][1]],
          [triangle.source[2][0], triangle.source[2][1]]];
        if ((newTriangle[0][0] - leftBound) > this.sourceWorldWidth_ / 2) {
          newTriangle[0][0] -= this.sourceWorldWidth_;
        }
        if ((newTriangle[1][0] - leftBound) > this.sourceWorldWidth_ / 2) {
          newTriangle[1][0] -= this.sourceWorldWidth_;
        }
        if ((newTriangle[2][0] - leftBound) > this.sourceWorldWidth_ / 2) {
          newTriangle[2][0] -= this.sourceWorldWidth_;
        }

        // Rarely (if the extent contains both the dateline and prime meridian)
        // the shift can in turn break some triangles.
        // Detect this here and don't shift in such cases.
        var minX = Math.min(
          newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
        var maxX = Math.max(
          newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
        if ((maxX - minX) < this.sourceWorldWidth_ / 2) {
          triangle.source = newTriangle;
        }
      }
    }.bind(this));
  }

  transformInvCache = {};
};

/**
 * Adds triangle to the triangulation.
 * @param {module:ol/coordinate~Coordinate} a The target a coordinate.
 * @param {module:ol/coordinate~Coordinate} b The target b coordinate.
 * @param {module:ol/coordinate~Coordinate} c The target c coordinate.
 * @param {module:ol/coordinate~Coordinate} aSrc The source a coordinate.
 * @param {module:ol/coordinate~Coordinate} bSrc The source b coordinate.
 * @param {module:ol/coordinate~Coordinate} cSrc The source c coordinate.
 * @private
 */
Triangulation.prototype.addTriangle_ = function addTriangle_ (a, b, c, aSrc, bSrc, cSrc) {
  this.triangles_.push({
    source: [aSrc, bSrc, cSrc],
    target: [a, b, c]
  });
};

/**
 * Adds quad (points in clock-wise order) to the triangulation
 * (and reprojects the vertices) if valid.
 * Performs quad subdivision if needed to increase precision.
 *
 * @param {module:ol/coordinate~Coordinate} a The target a coordinate.
 * @param {module:ol/coordinate~Coordinate} b The target b coordinate.
 * @param {module:ol/coordinate~Coordinate} c The target c coordinate.
 * @param {module:ol/coordinate~Coordinate} d The target d coordinate.
 * @param {module:ol/coordinate~Coordinate} aSrc The source a coordinate.
 * @param {module:ol/coordinate~Coordinate} bSrc The source b coordinate.
 * @param {module:ol/coordinate~Coordinate} cSrc The source c coordinate.
 * @param {module:ol/coordinate~Coordinate} dSrc The source d coordinate.
 * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
 * @private
 */
Triangulation.prototype.addQuad_ = function addQuad_ (a, b, c, d, aSrc, bSrc, cSrc, dSrc, maxSubdivision) {

  var sourceQuadExtent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["boundingExtent"])([aSrc, bSrc, cSrc, dSrc]);
  var sourceCoverageX = this.sourceWorldWidth_ ?
    Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getWidth"])(sourceQuadExtent) / this.sourceWorldWidth_ : null;
  var sourceWorldWidth = /** @type {number} */ (this.sourceWorldWidth_);

  // when the quad is wrapped in the source projection
  // it covers most of the projection extent, but not fully
  var wrapsX = this.sourceProj_.canWrapX() &&
               sourceCoverageX > 0.5 && sourceCoverageX < 1;

  var needsSubdivision = false;

  if (maxSubdivision > 0) {
    if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
      var targetQuadExtent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["boundingExtent"])([a, b, c, d]);
      var targetCoverageX = Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["getWidth"])(targetQuadExtent) / this.targetWorldWidth_;
      needsSubdivision |=
          targetCoverageX > MAX_TRIANGLE_WIDTH;
    }
    if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) {
      needsSubdivision |=
          sourceCoverageX > MAX_TRIANGLE_WIDTH;
    }
  }

  if (!needsSubdivision && this.maxSourceExtent_) {
    if (!Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["intersects"])(sourceQuadExtent, this.maxSourceExtent_)) {
      // whole quad outside source projection extent -> ignore
      return;
    }
  }

  if (!needsSubdivision) {
    if (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ||
        !isFinite(bSrc[0]) || !isFinite(bSrc[1]) ||
        !isFinite(cSrc[0]) || !isFinite(cSrc[1]) ||
        !isFinite(dSrc[0]) || !isFinite(dSrc[1])) {
      if (maxSubdivision > 0) {
        needsSubdivision = true;
      } else {
        return;
      }
    }
  }

  if (maxSubdivision > 0) {
    if (!needsSubdivision) {
      var center = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
      var centerSrc = this.transformInv_(center);

      var dx;
      if (wrapsX) {
        var centerSrcEstimX =
            (Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["modulo"])(aSrc[0], sourceWorldWidth) +
             Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["modulo"])(cSrc[0], sourceWorldWidth)) / 2;
        dx = centerSrcEstimX -
            Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["modulo"])(centerSrc[0], sourceWorldWidth);
      } else {
        dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
      }
      var dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
      var centerSrcErrorSquared = dx * dx + dy * dy;
      needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
    }
    if (needsSubdivision) {
      if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
        // split horizontally (top & bottom)
        var bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2];
        var bcSrc = this.transformInv_(bc);
        var da = [(d[0] + a[0]) / 2, (d[1] + a[1]) / 2];
        var daSrc = this.transformInv_(da);

        this.addQuad_(
          a, b, bc, da, aSrc, bSrc, bcSrc, daSrc, maxSubdivision - 1);
        this.addQuad_(
          da, bc, c, d, daSrc, bcSrc, cSrc, dSrc, maxSubdivision - 1);
      } else {
        // split vertically (left & right)
        var ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        var abSrc = this.transformInv_(ab);
        var cd = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
        var cdSrc = this.transformInv_(cd);

        this.addQuad_(
          a, ab, cd, d, aSrc, abSrc, cdSrc, dSrc, maxSubdivision - 1);
        this.addQuad_(
          ab, b, c, cd, abSrc, bSrc, cSrc, cdSrc, maxSubdivision - 1);
      }
      return;
    }
  }

  if (wrapsX) {
    if (!this.canWrapXInSource_) {
      return;
    }
    this.wrapsXInSource_ = true;
  }

  this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
  this.addTriangle_(a, b, c, aSrc, bSrc, cSrc);
};

/**
 * Calculates extent of the 'source' coordinates from all the triangles.
 *
 * @return {module:ol/extent~Extent} Calculated extent.
 */
Triangulation.prototype.calculateSourceExtent = function calculateSourceExtent () {
  var extent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["createEmpty"])();

  this.triangles_.forEach(function(triangle, i, arr) {
    var src = triangle.source;
    Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["extendCoordinate"])(extent, src[0]);
    Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["extendCoordinate"])(extent, src[1]);
    Object(_extent_js__WEBPACK_IMPORTED_MODULE_0__["extendCoordinate"])(extent, src[2]);
  });

  return extent;
};

/**
 * @return {Array<module:ol/reproj/Triangulation~Triangle>} Array of the calculated triangles.
 */
Triangulation.prototype.getTriangles = function getTriangles () {
  return this.triangles_;
};

/* harmony default export */ __webpack_exports__["default"] = (Triangulation);

//# sourceMappingURL=Triangulation.js.map

/***/ }),

/***/ "./node_modules/ol/source/Image.js":
/*!*****************************************!*\
  !*** ./node_modules/ol/source/Image.js ***!
  \*****************************************/
/*! exports provided: defaultImageLoadFunction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultImageLoadFunction", function() { return defaultImageLoadFunction; });
/* harmony import */ var _reproj_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reproj/common.js */ "./node_modules/ol/reproj/common.js");
/* harmony import */ var _ImageState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ImageState.js */ "./node_modules/ol/ImageState.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../array.js */ "./node_modules/ol/array.js");
/* harmony import */ var _events_Event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/Event.js */ "./node_modules/ol/events/Event.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var _reproj_Image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reproj/Image.js */ "./node_modules/ol/reproj/Image.js");
/* harmony import */ var _source_Source_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../source/Source.js */ "./node_modules/ol/source/Source.js");
/**
 * @module ol/source/Image
 */











/**
 * @enum {string}
 */
var ImageSourceEventType = {

  /**
   * Triggered when an image starts loading.
   * @event ol/source/Image~ImageSourceEvent#imageloadstart
   * @api
   */
  IMAGELOADSTART: 'imageloadstart',

  /**
   * Triggered when an image finishes loading.
   * @event ol/source/Image~ImageSourceEvent#imageloadend
   * @api
   */
  IMAGELOADEND: 'imageloadend',

  /**
   * Triggered if image loading results in an error.
   * @event ol/source/Image~ImageSourceEvent#imageloaderror
   * @api
   */
  IMAGELOADERROR: 'imageloaderror'

};


/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Image~ImageSource} instances are instances of this
 * type.
 */
var ImageSourceEvent = (function (Event) {
  function ImageSourceEvent(type, image) {

    Event.call(this, type);

    /**
     * The image related to the event.
     * @type {module:ol/Image}
     * @api
     */
    this.image = image;

  }

  if ( Event ) ImageSourceEvent.__proto__ = Event;
  ImageSourceEvent.prototype = Object.create( Event && Event.prototype );
  ImageSourceEvent.prototype.constructor = ImageSourceEvent;

  return ImageSourceEvent;
}(_events_Event_js__WEBPACK_IMPORTED_MODULE_3__["default"]));


/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions]
 * @property {module:ol/extent~Extent} [extent]
 * @property {module:ol/proj~ProjectionLike} projection
 * @property {Array<number>} [resolutions]
 * @property {module:ol/source/State} [state]
 */


/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for sources providing a single image.
 * @api
 */
var ImageSource = (function (Source) {
  function ImageSource(options) {
    Source.call(this, {
      attributions: options.attributions,
      extent: options.extent,
      projection: options.projection,
      state: options.state
    });

    /**
     * @private
     * @type {Array<number>}
     */
    this.resolutions_ = options.resolutions !== undefined ?
      options.resolutions : null;


    /**
     * @private
     * @type {module:ol/reproj/Image}
     */
    this.reprojectedImage_ = null;


    /**
     * @private
     * @type {number}
     */
    this.reprojectedRevision_ = 0;
  }

  if ( Source ) ImageSource.__proto__ = Source;
  ImageSource.prototype = Object.create( Source && Source.prototype );
  ImageSource.prototype.constructor = ImageSource;

  /**
   * @return {Array<number>} Resolutions.
   * @override
   */
  ImageSource.prototype.getResolutions = function getResolutions () {
    return this.resolutions_;
  };

  /**
   * @protected
   * @param {number} resolution Resolution.
   * @return {number} Resolution.
   */
  ImageSource.prototype.findNearestResolution = function findNearestResolution (resolution) {
    if (this.resolutions_) {
      var idx = Object(_array_js__WEBPACK_IMPORTED_MODULE_2__["linearFindNearest"])(this.resolutions_, resolution, 0);
      resolution = this.resolutions_[idx];
    }
    return resolution;
  };

  /**
   * @param {module:ol/extent~Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {module:ol/proj/Projection} projection Projection.
   * @return {module:ol/ImageBase} Single image.
   */
  ImageSource.prototype.getImage = function getImage (extent, resolution, pixelRatio, projection) {
    var sourceProjection = this.getProjection();
    if (!_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"] ||
        !sourceProjection ||
        !projection ||
        Object(_proj_js__WEBPACK_IMPORTED_MODULE_5__["equivalent"])(sourceProjection, projection)) {
      if (sourceProjection) {
        projection = sourceProjection;
      }
      return this.getImageInternal(extent, resolution, pixelRatio, projection);
    } else {
      if (this.reprojectedImage_) {
        if (this.reprojectedRevision_ == this.getRevision() &&
            Object(_proj_js__WEBPACK_IMPORTED_MODULE_5__["equivalent"])(
              this.reprojectedImage_.getProjection(), projection) &&
            this.reprojectedImage_.getResolution() == resolution &&
            Object(_extent_js__WEBPACK_IMPORTED_MODULE_4__["equals"])(this.reprojectedImage_.getExtent(), extent)) {
          return this.reprojectedImage_;
        }
        this.reprojectedImage_.dispose();
        this.reprojectedImage_ = null;
      }

      this.reprojectedImage_ = new _reproj_Image_js__WEBPACK_IMPORTED_MODULE_6__["default"](
        sourceProjection, projection, extent, resolution, pixelRatio,
        function(extent, resolution, pixelRatio) {
          return this.getImageInternal(extent, resolution,
            pixelRatio, sourceProjection);
        }.bind(this));
      this.reprojectedRevision_ = this.getRevision();

      return this.reprojectedImage_;
    }
  };

  /**
   * @abstract
   * @param {module:ol/extent~Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {module:ol/proj/Projection} projection Projection.
   * @return {module:ol/ImageBase} Single image.
   * @protected
   */
  ImageSource.prototype.getImageInternal = function getImageInternal (extent, resolution, pixelRatio, projection) {};

  /**
   * Handle image change events.
   * @param {module:ol/events/Event} event Event.
   * @protected
   */
  ImageSource.prototype.handleImageChange = function handleImageChange (event) {
    var image = /** @type {module:ol/Image} */ (event.target);
    switch (image.getState()) {
      case _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADING:
        this.loading = true;
        this.dispatchEvent(
          new ImageSourceEvent(ImageSourceEventType.IMAGELOADSTART,
            image));
        break;
      case _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADED:
        this.loading = false;
        this.dispatchEvent(
          new ImageSourceEvent(ImageSourceEventType.IMAGELOADEND,
            image));
        break;
      case _ImageState_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR:
        this.loading = false;
        this.dispatchEvent(
          new ImageSourceEvent(ImageSourceEventType.IMAGELOADERROR,
            image));
        break;
      default:
        // pass
    }
  };

  return ImageSource;
}(_source_Source_js__WEBPACK_IMPORTED_MODULE_7__["default"]));


/**
 * Default image load function for image sources that use module:ol/Image~Image image
 * instances.
 * @param {module:ol/Image} image Image.
 * @param {string} src Source.
 */
function defaultImageLoadFunction(image, src) {
  image.getImage().src = src;
}


/* harmony default export */ __webpack_exports__["default"] = (ImageSource);

//# sourceMappingURL=Image.js.map

/***/ }),

/***/ "./node_modules/ol/source/ImageWMS.js":
/*!********************************************!*\
  !*** ./node_modules/ol/source/ImageWMS.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/ol/source/common.js");
/* harmony import */ var _Image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Image.js */ "./node_modules/ol/Image.js");
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asserts.js */ "./node_modules/ol/asserts.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events.js */ "./node_modules/ol/events.js");
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/EventType.js */ "./node_modules/ol/events/EventType.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../obj.js */ "./node_modules/ol/obj.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var _reproj_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reproj.js */ "./node_modules/ol/reproj.js");
/* harmony import */ var _source_Image_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../source/Image.js */ "./node_modules/ol/source/Image.js");
/* harmony import */ var _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../source/WMSServerType.js */ "./node_modules/ol/source/WMSServerType.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../string.js */ "./node_modules/ol/string.js");
/* harmony import */ var _uri_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../uri.js */ "./node_modules/ol/uri.js");
/**
 * @module ol/source/ImageWMS
 */

















/**
 * @const
 * @type {module:ol/size~Size}
 */
var GETFEATUREINFO_IMAGE_SIZE = [101, 101];


/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions] Attributions.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [hidpi=true] Use the `ol/Map#pixelRatio` value when requesting
 * the image from the remote server.
 * @property {module:ol/source/WMSServerType|string} [serverType] The type of
 * the remote WMS server: `mapserver`, `geoserver` or `qgis`. Only needed if `hidpi` is `true`.
 * @property {module:ol/Image~LoadFunction} [imageLoadFunction] Optional function to load an image given a URL.
 * @property {Object<string,*>} params WMS request parameters.
 * At least a `LAYERS` param is required. `STYLES` is
 * `''` by default. `VERSION` is `1.3.0` by default. `WIDTH`, `HEIGHT`, `BBOX`
 * and `CRS` (`SRS` for WMS version < 1.3.0) will be set dynamically.
 * @property {module:ol/proj~ProjectionLike} projection Projection.
 * @property {number} [ratio=1.5] Ratio. `1` means image requests are the size of the map viewport, `2` means
 * twice the width and height of the map viewport, and so on. Must be `1` or
 * higher.
 * @property {Array<number>} [resolutions] Resolutions.
 * If specified, requests will be made for these resolutions only.
 * @property {string} url WMS service URL.
 */


/**
 * @classdesc
 * Source for WMS servers providing single, untiled images.
 *
 * @fires ol/source/Image~ImageSourceEvent
 * @api
 */
var ImageWMS = (function (ImageSource) {
  function ImageWMS(opt_options) {

    var options = opt_options || {};

    ImageSource.call(this, {
      attributions: options.attributions,
      projection: options.projection,
      resolutions: options.resolutions
    });

    /**
     * @private
     * @type {?string}
     */
    this.crossOrigin_ =
        options.crossOrigin !== undefined ? options.crossOrigin : null;

    /**
     * @private
     * @type {string|undefined}
     */
    this.url_ = options.url;

    /**
     * @private
     * @type {module:ol/Image~LoadFunction}
     */
    this.imageLoadFunction_ = options.imageLoadFunction !== undefined ?
      options.imageLoadFunction : _source_Image_js__WEBPACK_IMPORTED_MODULE_9__["defaultImageLoadFunction"];

    /**
     * @private
     * @type {!Object}
     */
    this.params_ = options.params || {};

    /**
     * @private
     * @type {boolean}
     */
    this.v13_ = true;
    this.updateV13_();

    /**
     * @private
     * @type {module:ol/source/WMSServerType|undefined}
     */
    this.serverType_ = /** @type {module:ol/source/WMSServerType|undefined} */ (options.serverType);

    /**
     * @private
     * @type {boolean}
     */
    this.hidpi_ = options.hidpi !== undefined ? options.hidpi : true;

    /**
     * @private
     * @type {module:ol/Image}
     */
    this.image_ = null;

    /**
     * @private
     * @type {module:ol/size~Size}
     */
    this.imageSize_ = [0, 0];

    /**
     * @private
     * @type {number}
     */
    this.renderedRevision_ = 0;

    /**
     * @private
     * @type {number}
     */
    this.ratio_ = options.ratio !== undefined ? options.ratio : 1.5;

  }

  if ( ImageSource ) ImageWMS.__proto__ = ImageSource;
  ImageWMS.prototype = Object.create( ImageSource && ImageSource.prototype );
  ImageWMS.prototype.constructor = ImageWMS;

  /**
   * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
   * projection. Return `undefined` if the GetFeatureInfo URL cannot be
   * constructed.
   * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {module:ol/proj~ProjectionLike} projection Projection.
   * @param {!Object} params GetFeatureInfo params. `INFO_FORMAT` at least should
   *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
   *     in the `LAYERS` parameter will be used. `VERSION` should not be
   *     specified here.
   * @return {string|undefined} GetFeatureInfo URL.
   * @api
   */
  ImageWMS.prototype.getGetFeatureInfoUrl = function getGetFeatureInfoUrl (coordinate, resolution, projection, params) {
    if (this.url_ === undefined) {
      return undefined;
    }
    var projectionObj = Object(_proj_js__WEBPACK_IMPORTED_MODULE_7__["get"])(projection);
    var sourceProjectionObj = this.getProjection();

    if (sourceProjectionObj && sourceProjectionObj !== projectionObj) {
      resolution = Object(_reproj_js__WEBPACK_IMPORTED_MODULE_8__["calculateSourceResolution"])(sourceProjectionObj, projectionObj, coordinate, resolution);
      coordinate = Object(_proj_js__WEBPACK_IMPORTED_MODULE_7__["transform"])(coordinate, projectionObj, sourceProjectionObj);
    }

    var extent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getForViewAndSize"])(coordinate, resolution, 0,
      GETFEATUREINFO_IMAGE_SIZE);

    var baseParams = {
      'SERVICE': 'WMS',
      'VERSION': _common_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WMS_VERSION"],
      'REQUEST': 'GetFeatureInfo',
      'FORMAT': 'image/png',
      'TRANSPARENT': true,
      'QUERY_LAYERS': this.params_['LAYERS']
    };
    Object(_obj_js__WEBPACK_IMPORTED_MODULE_6__["assign"])(baseParams, this.params_, params);

    var x = Math.floor((coordinate[0] - extent[0]) / resolution);
    var y = Math.floor((extent[3] - coordinate[1]) / resolution);
    baseParams[this.v13_ ? 'I' : 'X'] = x;
    baseParams[this.v13_ ? 'J' : 'Y'] = y;

    return this.getRequestUrl_(
      extent, GETFEATUREINFO_IMAGE_SIZE,
      1, sourceProjectionObj || projectionObj, baseParams);
  };

  /**
   * Get the user-provided params, i.e. those passed to the constructor through
   * the "params" option, and possibly updated using the updateParams method.
   * @return {Object} Params.
   * @api
   */
  ImageWMS.prototype.getParams = function getParams () {
    return this.params_;
  };

  /**
   * @inheritDoc
   */
  ImageWMS.prototype.getImageInternal = function getImageInternal (extent, resolution, pixelRatio, projection) {

    if (this.url_ === undefined) {
      return null;
    }

    resolution = this.findNearestResolution(resolution);

    if (pixelRatio != 1 && (!this.hidpi_ || this.serverType_ === undefined)) {
      pixelRatio = 1;
    }

    var imageResolution = resolution / pixelRatio;

    var center = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getCenter"])(extent);
    var viewWidth = Math.ceil(Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getWidth"])(extent) / imageResolution);
    var viewHeight = Math.ceil(Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getHeight"])(extent) / imageResolution);
    var viewExtent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getForViewAndSize"])(center, imageResolution, 0,
      [viewWidth, viewHeight]);
    var requestWidth = Math.ceil(this.ratio_ * Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getWidth"])(extent) / imageResolution);
    var requestHeight = Math.ceil(this.ratio_ * Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getHeight"])(extent) / imageResolution);
    var requestExtent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getForViewAndSize"])(center, imageResolution, 0,
      [requestWidth, requestHeight]);

    var image = this.image_;
    if (image &&
        this.renderedRevision_ == this.getRevision() &&
        image.getResolution() == resolution &&
        image.getPixelRatio() == pixelRatio &&
        Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["containsExtent"])(image.getExtent(), viewExtent)) {
      return image;
    }

    var params = {
      'SERVICE': 'WMS',
      'VERSION': _common_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WMS_VERSION"],
      'REQUEST': 'GetMap',
      'FORMAT': 'image/png',
      'TRANSPARENT': true
    };
    Object(_obj_js__WEBPACK_IMPORTED_MODULE_6__["assign"])(params, this.params_);

    this.imageSize_[0] = Math.round(Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getWidth"])(requestExtent) / imageResolution);
    this.imageSize_[1] = Math.round(Object(_extent_js__WEBPACK_IMPORTED_MODULE_5__["getHeight"])(requestExtent) / imageResolution);

    var url = this.getRequestUrl_(requestExtent, this.imageSize_, pixelRatio,
      projection, params);

    this.image_ = new _Image_js__WEBPACK_IMPORTED_MODULE_1__["default"](requestExtent, resolution, pixelRatio,
      url, this.crossOrigin_, this.imageLoadFunction_);

    this.renderedRevision_ = this.getRevision();

    Object(_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"])(this.image_, _events_EventType_js__WEBPACK_IMPORTED_MODULE_4__["default"].CHANGE,
      this.handleImageChange, this);

    return this.image_;

  };

  /**
   * Return the image load function of the source.
   * @return {module:ol/Image~LoadFunction} The image load function.
   * @api
   */
  ImageWMS.prototype.getImageLoadFunction = function getImageLoadFunction () {
    return this.imageLoadFunction_;
  };

  /**
   * @param {module:ol/extent~Extent} extent Extent.
   * @param {module:ol/size~Size} size Size.
   * @param {number} pixelRatio Pixel ratio.
   * @param {module:ol/proj/Projection} projection Projection.
   * @param {Object} params Params.
   * @return {string} Request URL.
   * @private
   */
  ImageWMS.prototype.getRequestUrl_ = function getRequestUrl_ (extent, size, pixelRatio, projection, params) {

    Object(_asserts_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.url_ !== undefined, 9); // `url` must be configured or set using `#setUrl()`

    params[this.v13_ ? 'CRS' : 'SRS'] = projection.getCode();

    if (!('STYLES' in this.params_)) {
      params['STYLES'] = '';
    }

    if (pixelRatio != 1) {
      switch (this.serverType_) {
        case _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_10__["default"].GEOSERVER:
          var dpi = (90 * pixelRatio + 0.5) | 0;
          if ('FORMAT_OPTIONS' in params) {
            params['FORMAT_OPTIONS'] += ';dpi:' + dpi;
          } else {
            params['FORMAT_OPTIONS'] = 'dpi:' + dpi;
          }
          break;
        case _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_10__["default"].MAPSERVER:
          params['MAP_RESOLUTION'] = 90 * pixelRatio;
          break;
        case _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_10__["default"].CARMENTA_SERVER:
        case _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_10__["default"].QGIS:
          params['DPI'] = 90 * pixelRatio;
          break;
        default:
          Object(_asserts_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(false, 8); // Unknown `serverType` configured
          break;
      }
    }

    params['WIDTH'] = size[0];
    params['HEIGHT'] = size[1];

    var axisOrientation = projection.getAxisOrientation();
    var bbox;
    if (this.v13_ && axisOrientation.substr(0, 2) == 'ne') {
      bbox = [extent[1], extent[0], extent[3], extent[2]];
    } else {
      bbox = extent;
    }
    params['BBOX'] = bbox.join(',');

    return Object(_uri_js__WEBPACK_IMPORTED_MODULE_12__["appendParams"])(/** @type {string} */ (this.url_), params);
  };

  /**
   * Return the URL used for this WMS source.
   * @return {string|undefined} URL.
   * @api
   */
  ImageWMS.prototype.getUrl = function getUrl () {
    return this.url_;
  };

  /**
   * Set the image load function of the source.
   * @param {module:ol/Image~LoadFunction} imageLoadFunction Image load function.
   * @api
   */
  ImageWMS.prototype.setImageLoadFunction = function setImageLoadFunction (imageLoadFunction) {
    this.image_ = null;
    this.imageLoadFunction_ = imageLoadFunction;
    this.changed();
  };

  /**
   * Set the URL to use for requests.
   * @param {string|undefined} url URL.
   * @api
   */
  ImageWMS.prototype.setUrl = function setUrl (url) {
    if (url != this.url_) {
      this.url_ = url;
      this.image_ = null;
      this.changed();
    }
  };

  /**
   * Update the user-provided params.
   * @param {Object} params Params.
   * @api
   */
  ImageWMS.prototype.updateParams = function updateParams (params) {
    Object(_obj_js__WEBPACK_IMPORTED_MODULE_6__["assign"])(this.params_, params);
    this.updateV13_();
    this.image_ = null;
    this.changed();
  };

  /**
   * @private
   */
  ImageWMS.prototype.updateV13_ = function updateV13_ () {
    var version = this.params_['VERSION'] || _common_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WMS_VERSION"];
    this.v13_ = Object(_string_js__WEBPACK_IMPORTED_MODULE_11__["compareVersions"])(version, '1.3') >= 0;
  };

  return ImageWMS;
}(_source_Image_js__WEBPACK_IMPORTED_MODULE_9__["default"]));


/* harmony default export */ __webpack_exports__["default"] = (ImageWMS);

//# sourceMappingURL=ImageWMS.js.map

/***/ }),

/***/ "./node_modules/ol/source/Tile.js":
/*!****************************************!*\
  !*** ./node_modules/ol/source/Tile.js ***!
  \****************************************/
/*! exports provided: TileSourceEvent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileSourceEvent", function() { return TileSourceEvent; });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ "./node_modules/ol/functions.js");
/* harmony import */ var _TileCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TileCache.js */ "./node_modules/ol/TileCache.js");
/* harmony import */ var _TileState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileState.js */ "./node_modules/ol/TileState.js");
/* harmony import */ var _events_Event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/Event.js */ "./node_modules/ol/events/Event.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../size.js */ "./node_modules/ol/size.js");
/* harmony import */ var _source_Source_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../source/Source.js */ "./node_modules/ol/source/Source.js");
/* harmony import */ var _tilecoord_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tilecoord.js */ "./node_modules/ol/tilecoord.js");
/* harmony import */ var _tilegrid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tilegrid.js */ "./node_modules/ol/tilegrid.js");
/**
 * @module ol/source/Tile
 */











/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions]
 * @property {number} [cacheSize]
 * @property {module:ol/extent~Extent} [extent]
 * @property {boolean} [opaque]
 * @property {number} [tilePixelRatio]
 * @property {module:ol/proj~ProjectionLike} [projection]
 * @property {module:ol/source/State} [state]
 * @property {module:ol/tilegrid/TileGrid} [tileGrid]
 * @property {boolean} [wrapX=true]
 * @property {number} [transition]
 */


/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for sources providing images divided into a tile grid.
 * @api
 */
var TileSource = (function (Source) {
  function TileSource(options) {

    Source.call(this, {
      attributions: options.attributions,
      extent: options.extent,
      projection: options.projection,
      state: options.state,
      wrapX: options.wrapX
    });

    /**
     * @private
     * @type {boolean}
     */
    this.opaque_ = options.opaque !== undefined ? options.opaque : false;

    /**
     * @private
     * @type {number}
     */
    this.tilePixelRatio_ = options.tilePixelRatio !== undefined ?
      options.tilePixelRatio : 1;

    /**
     * @protected
     * @type {module:ol/tilegrid/TileGrid}
     */
    this.tileGrid = options.tileGrid !== undefined ? options.tileGrid : null;

    /**
     * @protected
     * @type {module:ol/TileCache}
     */
    this.tileCache = new _TileCache_js__WEBPACK_IMPORTED_MODULE_1__["default"](options.cacheSize);

    /**
     * @protected
     * @type {module:ol/size~Size}
     */
    this.tmpSize = [0, 0];

    /**
     * @private
     * @type {string}
     */
    this.key_ = '';

    /**
     * @protected
     * @type {module:ol/Tile~Options}
     */
    this.tileOptions = {transition: options.transition};

  }

  if ( Source ) TileSource.__proto__ = Source;
  TileSource.prototype = Object.create( Source && Source.prototype );
  TileSource.prototype.constructor = TileSource;

  /**
   * @return {boolean} Can expire cache.
   */
  TileSource.prototype.canExpireCache = function canExpireCache () {
    return this.tileCache.canExpireCache();
  };

  /**
   * @param {module:ol/proj/Projection} projection Projection.
   * @param {!Object<string, module:ol/TileRange>} usedTiles Used tiles.
   */
  TileSource.prototype.expireCache = function expireCache (projection, usedTiles) {
    var tileCache = this.getTileCacheForProjection(projection);
    if (tileCache) {
      tileCache.expireCache(usedTiles);
    }
  };

  /**
   * @param {module:ol/proj/Projection} projection Projection.
   * @param {number} z Zoom level.
   * @param {module:ol/TileRange} tileRange Tile range.
   * @param {function(module:ol/Tile):(boolean|undefined)} callback Called with each
   *     loaded tile.  If the callback returns `false`, the tile will not be
   *     considered loaded.
   * @return {boolean} The tile range is fully covered with loaded tiles.
   */
  TileSource.prototype.forEachLoadedTile = function forEachLoadedTile (projection, z, tileRange, callback) {
    var tileCache = this.getTileCacheForProjection(projection);
    if (!tileCache) {
      return false;
    }

    var covered = true;
    var tile, tileCoordKey, loaded;
    for (var x = tileRange.minX; x <= tileRange.maxX; ++x) {
      for (var y = tileRange.minY; y <= tileRange.maxY; ++y) {
        tileCoordKey = Object(_tilecoord_js__WEBPACK_IMPORTED_MODULE_7__["getKeyZXY"])(z, x, y);
        loaded = false;
        if (tileCache.containsKey(tileCoordKey)) {
          tile = /** @type {!module:ol/Tile} */ (tileCache.get(tileCoordKey));
          loaded = tile.getState() === _TileState_js__WEBPACK_IMPORTED_MODULE_2__["default"].LOADED;
          if (loaded) {
            loaded = (callback(tile) !== false);
          }
        }
        if (!loaded) {
          covered = false;
        }
      }
    }
    return covered;
  };

  /**
   * @param {module:ol/proj/Projection} projection Projection.
   * @return {number} Gutter.
   */
  TileSource.prototype.getGutterForProjection = function getGutterForProjection (projection) {
    return 0;
  };

  /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   * @protected
   */
  TileSource.prototype.getKey = function getKey () {
    return this.key_;
  };

  /**
   * Set the value to be used as the key for all tiles in the source.
   * @param {string} key The key for tiles.
   * @protected
   */
  TileSource.prototype.setKey = function setKey (key) {
    if (this.key_ !== key) {
      this.key_ = key;
      this.changed();
    }
  };

  /**
   * @param {module:ol/proj/Projection} projection Projection.
   * @return {boolean} Opaque.
   */
  TileSource.prototype.getOpaque = function getOpaque (projection) {
    return this.opaque_;
  };

  /**
   * @inheritDoc
   */
  TileSource.prototype.getResolutions = function getResolutions () {
    return this.tileGrid.getResolutions();
  };

  /**
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {module:ol/proj/Projection} projection Projection.
   * @return {!module:ol/Tile} Tile.
   */
  TileSource.prototype.getTile = function getTile (z, x, y, pixelRatio, projection) {};

  /**
   * Return the tile grid of the tile source.
   * @return {module:ol/tilegrid/TileGrid} Tile grid.
   * @api
   */
  TileSource.prototype.getTileGrid = function getTileGrid () {
    return this.tileGrid;
  };

  /**
   * @param {module:ol/proj/Projection} projection Projection.
   * @return {!module:ol/tilegrid/TileGrid} Tile grid.
   */
  TileSource.prototype.getTileGridForProjection = function getTileGridForProjection$1 (projection) {
    if (!this.tileGrid) {
      return Object(_tilegrid_js__WEBPACK_IMPORTED_MODULE_8__["getForProjection"])(projection);
    } else {
      return this.tileGrid;
    }
  };

  /**
   * @param {module:ol/proj/Projection} projection Projection.
   * @return {module:ol/TileCache} Tile cache.
   * @protected
   */
  TileSource.prototype.getTileCacheForProjection = function getTileCacheForProjection (projection) {
    var thisProj = this.getProjection();
    if (thisProj && !Object(_proj_js__WEBPACK_IMPORTED_MODULE_4__["equivalent"])(thisProj, projection)) {
      return null;
    } else {
      return this.tileCache;
    }
  };

  /**
   * Get the tile pixel ratio for this source. Subclasses may override this
   * method, which is meant to return a supported pixel ratio that matches the
   * provided `pixelRatio` as close as possible.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   */
  TileSource.prototype.getTilePixelRatio = function getTilePixelRatio (pixelRatio) {
    return this.tilePixelRatio_;
  };

  /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {module:ol/proj/Projection} projection Projection.
   * @return {module:ol/size~Size} Tile size.
   */
  TileSource.prototype.getTilePixelSize = function getTilePixelSize (z, pixelRatio, projection) {
    var tileGrid = this.getTileGridForProjection(projection);
    var tilePixelRatio = this.getTilePixelRatio(pixelRatio);
    var tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_5__["toSize"])(tileGrid.getTileSize(z), this.tmpSize);
    if (tilePixelRatio == 1) {
      return tileSize;
    } else {
      return Object(_size_js__WEBPACK_IMPORTED_MODULE_5__["scale"])(tileSize, tilePixelRatio, this.tmpSize);
    }
  };

  /**
   * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
   * is outside the resolution and extent range of the tile grid, `null` will be
   * returned.
   * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
   * @param {module:ol/proj/Projection=} opt_projection Projection.
   * @return {module:ol/tilecoord~TileCoord} Tile coordinate to be passed to the tileUrlFunction or
   *     null if no tile URL should be created for the passed `tileCoord`.
   */
  TileSource.prototype.getTileCoordForTileUrlFunction = function getTileCoordForTileUrlFunction (tileCoord, opt_projection) {
    var projection = opt_projection !== undefined ?
      opt_projection : this.getProjection();
    var tileGrid = this.getTileGridForProjection(projection);
    if (this.getWrapX() && projection.isGlobal()) {
      tileCoord = Object(_tilegrid_js__WEBPACK_IMPORTED_MODULE_8__["wrapX"])(tileGrid, tileCoord, projection);
    }
    return Object(_tilecoord_js__WEBPACK_IMPORTED_MODULE_7__["withinExtentAndZ"])(tileCoord, tileGrid) ? tileCoord : null;
  };

  /**
   * @inheritDoc
   */
  TileSource.prototype.refresh = function refresh () {
    this.tileCache.clear();
    this.changed();
  };

  return TileSource;
}(_source_Source_js__WEBPACK_IMPORTED_MODULE_6__["default"]));


/**
 * Marks a tile coord as being used, without triggering a load.
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {module:ol/proj/Projection} projection Projection.
 */
TileSource.prototype.useTile = _functions_js__WEBPACK_IMPORTED_MODULE_0__["VOID"];


/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Tile~TileSource} instances are instances of this
 * type.
 */
var TileSourceEvent = (function (Event) {
  function TileSourceEvent(type, tile) {

    Event.call(this, type);

    /**
     * The tile related to the event.
     * @type {module:ol/Tile}
     * @api
     */
    this.tile = tile;

  }

  if ( Event ) TileSourceEvent.__proto__ = Event;
  TileSourceEvent.prototype = Object.create( Event && Event.prototype );
  TileSourceEvent.prototype.constructor = TileSourceEvent;

  return TileSourceEvent;
}(_events_Event_js__WEBPACK_IMPORTED_MODULE_3__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (TileSource);

//# sourceMappingURL=Tile.js.map

/***/ }),

/***/ "./node_modules/ol/source/TileEventType.js":
/*!*************************************************!*\
  !*** ./node_modules/ol/source/TileEventType.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @module ol/source/TileEventType
 */

/**
 * @enum {string}
 */
/* harmony default export */ __webpack_exports__["default"] = ({

  /**
   * Triggered when a tile starts loading.
   * @event module:ol/source/Tile~TileSourceEvent#tileloadstart
   * @api
   */
  TILELOADSTART: 'tileloadstart',

  /**
   * Triggered when a tile finishes loading, either when its data is loaded,
   * or when loading was aborted because the tile is no longer needed.
   * @event module:ol/source/Tile~TileSourceEvent#tileloadend
   * @api
   */
  TILELOADEND: 'tileloadend',

  /**
   * Triggered if tile loading results in an error.
   * @event module:ol/source/Tile~TileSourceEvent#tileloaderror
   * @api
   */
  TILELOADERROR: 'tileloaderror'

});

//# sourceMappingURL=TileEventType.js.map

/***/ }),

/***/ "./node_modules/ol/source/TileImage.js":
/*!*********************************************!*\
  !*** ./node_modules/ol/source/TileImage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reproj_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reproj/common.js */ "./node_modules/ol/reproj/common.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "./node_modules/ol/util.js");
/* harmony import */ var _ImageTile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImageTile.js */ "./node_modules/ol/ImageTile.js");
/* harmony import */ var _TileCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TileCache.js */ "./node_modules/ol/TileCache.js");
/* harmony import */ var _TileState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TileState.js */ "./node_modules/ol/TileState.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events.js */ "./node_modules/ol/events.js");
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/EventType.js */ "./node_modules/ol/events/EventType.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var _reproj_Tile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reproj/Tile.js */ "./node_modules/ol/reproj/Tile.js");
/* harmony import */ var _source_UrlTile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../source/UrlTile.js */ "./node_modules/ol/source/UrlTile.js");
/* harmony import */ var _tilecoord_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tilecoord.js */ "./node_modules/ol/tilecoord.js");
/* harmony import */ var _tilegrid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tilegrid.js */ "./node_modules/ol/tilegrid.js");
/**
 * @module ol/source/TileImage
 */













/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions] Attributions.
 * @property {number} [cacheSize=2048] Cache size.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [opaque=true] Whether the layer is opaque.
 * @property {module:ol/proj~ProjectionLike} projection Projection.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {module:ol/source/State} [state] Source state.
 * @property {module:ol/ImageTile~TileClass} [tileClass] Class used to instantiate image tiles.
 * Default is {@link module:ol/ImageTile~ImageTile}.
 * @property {module:ol/tilegrid/TileGrid} [tileGrid] Tile grid.
 * @property {module:ol/Tile~LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service. For example, if the tile
 * service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {module:ol/Tile~UrlFunction} [tileUrlFunction] Optional function to get tile URL given a tile coordinate and the projection.
 * @property {string} [url] URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @property {Array<string>} [urls] An array of URL templates.
 * @property {boolean} [wrapX] Whether to wrap the world horizontally. The default, is to
 * request out-of-bounds tiles from the server. When set to `false`, only one
 * world will be rendered. When set to `true`, tiles will be requested for one
 * world only, but they will be wrapped horizontally to render multiple worlds.
 * @property {number} [transition] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 */


/**
 * @classdesc
 * Base class for sources providing images divided into a tile grid.
 *
 * @fires module:ol/source/Tile~TileSourceEvent
 * @api
 */
var TileImage = (function (UrlTile) {
  function TileImage(options) {

    UrlTile.call(this, {
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      extent: options.extent,
      opaque: options.opaque,
      projection: options.projection,
      state: options.state,
      tileGrid: options.tileGrid,
      tileLoadFunction: options.tileLoadFunction ?
        options.tileLoadFunction : defaultTileLoadFunction,
      tilePixelRatio: options.tilePixelRatio,
      tileUrlFunction: options.tileUrlFunction,
      url: options.url,
      urls: options.urls,
      wrapX: options.wrapX,
      transition: options.transition
    });

    /**
     * @protected
     * @type {?string}
     */
    this.crossOrigin =
        options.crossOrigin !== undefined ? options.crossOrigin : null;

    /**
     * @protected
     * @type {function(new: module:ol/ImageTile, module:ol/tilecoord~TileCoord, module:ol/TileState, string,
     *        ?string, module:ol/Tile~LoadFunction, module:ol/Tile~Options=)}
     */
    this.tileClass = options.tileClass !== undefined ?
      options.tileClass : _ImageTile_js__WEBPACK_IMPORTED_MODULE_2__["default"];

    /**
     * @protected
     * @type {!Object<string, module:ol/TileCache>}
     */
    this.tileCacheForProjection = {};

    /**
     * @protected
     * @type {!Object<string, module:ol/tilegrid/TileGrid>}
     */
    this.tileGridForProjection = {};

    /**
     * @private
     * @type {number|undefined}
     */
    this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;

    /**
     * @private
     * @type {boolean}
     */
    this.renderReprojectionEdges_ = false;
  }

  if ( UrlTile ) TileImage.__proto__ = UrlTile;
  TileImage.prototype = Object.create( UrlTile && UrlTile.prototype );
  TileImage.prototype.constructor = TileImage;

  /**
   * @inheritDoc
   */
  TileImage.prototype.canExpireCache = function canExpireCache () {
    var this$1 = this;

    if (!_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"]) {
      return UrlTile.prototype.canExpireCache.call(this);
    }
    if (this.tileCache.canExpireCache()) {
      return true;
    } else {
      for (var key in this$1.tileCacheForProjection) {
        if (this$1.tileCacheForProjection[key].canExpireCache()) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * @inheritDoc
   */
  TileImage.prototype.expireCache = function expireCache (projection, usedTiles) {
    var this$1 = this;

    if (!_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"]) {
      UrlTile.prototype.expireCache.call(this, projection, usedTiles);
      return;
    }
    var usedTileCache = this.getTileCacheForProjection(projection);

    this.tileCache.expireCache(this.tileCache == usedTileCache ? usedTiles : {});
    for (var id in this$1.tileCacheForProjection) {
      var tileCache = this$1.tileCacheForProjection[id];
      tileCache.expireCache(tileCache == usedTileCache ? usedTiles : {});
    }
  };

  /**
   * @inheritDoc
   */
  TileImage.prototype.getGutterForProjection = function getGutterForProjection (projection) {
    if (_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"] &&
        this.getProjection() && projection && !Object(_proj_js__WEBPACK_IMPORTED_MODULE_7__["equivalent"])(this.getProjection(), projection)) {
      return 0;
    } else {
      return this.getGutter();
    }
  };

  /**
   * @return {number} Gutter.
   */
  TileImage.prototype.getGutter = function getGutter () {
    return 0;
  };

  /**
   * @inheritDoc
   */
  TileImage.prototype.getOpaque = function getOpaque (projection) {
    if (_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"] &&
        this.getProjection() && projection && !Object(_proj_js__WEBPACK_IMPORTED_MODULE_7__["equivalent"])(this.getProjection(), projection)) {
      return false;
    } else {
      return UrlTile.prototype.getOpaque.call(this, projection);
    }
  };

  /**
   * @inheritDoc
   */
  TileImage.prototype.getTileGridForProjection = function getTileGridForProjection$1 (projection) {
    if (!_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"]) {
      return UrlTile.prototype.getTileGridForProjection.call(this, projection);
    }
    var thisProj = this.getProjection();
    if (this.tileGrid && (!thisProj || Object(_proj_js__WEBPACK_IMPORTED_MODULE_7__["equivalent"])(thisProj, projection))) {
      return this.tileGrid;
    } else {
      var projKey = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getUid"])(projection).toString();
      if (!(projKey in this.tileGridForProjection)) {
        this.tileGridForProjection[projKey] = Object(_tilegrid_js__WEBPACK_IMPORTED_MODULE_11__["getForProjection"])(projection);
      }
      return (
        /** @type {!module:ol/tilegrid/TileGrid} */ (this.tileGridForProjection[projKey])
      );
    }
  };

  /**
   * @inheritDoc
   */
  TileImage.prototype.getTileCacheForProjection = function getTileCacheForProjection (projection) {
    if (!_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"]) {
      return UrlTile.prototype.getTileCacheForProjection.call(this, projection);
    }
    var thisProj = this.getProjection(); if (!thisProj || Object(_proj_js__WEBPACK_IMPORTED_MODULE_7__["equivalent"])(thisProj, projection)) {
      return this.tileCache;
    } else {
      var projKey = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getUid"])(projection).toString();
      if (!(projKey in this.tileCacheForProjection)) {
        this.tileCacheForProjection[projKey] = new _TileCache_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.tileCache.highWaterMark);
      }
      return this.tileCacheForProjection[projKey];
    }
  };

  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {module:ol/proj/Projection} projection Projection.
   * @param {string} key The key set on the tile.
   * @return {!module:ol/Tile} Tile.
   * @private
   */
  TileImage.prototype.createTile_ = function createTile_ (z, x, y, pixelRatio, projection, key) {
    var tileCoord = [z, x, y];
    var urlTileCoord = this.getTileCoordForTileUrlFunction(
      tileCoord, projection);
    var tileUrl = urlTileCoord ?
      this.tileUrlFunction(urlTileCoord, pixelRatio, projection) : undefined;
    var tile = new this.tileClass(
      tileCoord,
      tileUrl !== undefined ? _TileState_js__WEBPACK_IMPORTED_MODULE_4__["default"].IDLE : _TileState_js__WEBPACK_IMPORTED_MODULE_4__["default"].EMPTY,
      tileUrl !== undefined ? tileUrl : '',
      this.crossOrigin,
      this.tileLoadFunction,
      this.tileOptions);
    tile.key = key;
    Object(_events_js__WEBPACK_IMPORTED_MODULE_5__["listen"])(tile, _events_EventType_js__WEBPACK_IMPORTED_MODULE_6__["default"].CHANGE,
      this.handleTileChange, this);
    return tile;
  };

  /**
   * @inheritDoc
   */
  TileImage.prototype.getTile = function getTile (z, x, y, pixelRatio, projection) {
    var sourceProjection = /** @type {!module:ol/proj/Projection} */ (this.getProjection());
    if (!_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"] ||
        !sourceProjection || !projection || Object(_proj_js__WEBPACK_IMPORTED_MODULE_7__["equivalent"])(sourceProjection, projection)) {
      return this.getTileInternal(z, x, y, pixelRatio, sourceProjection || projection);
    } else {
      var cache = this.getTileCacheForProjection(projection);
      var tileCoord = [z, x, y];
      var tile;
      var tileCoordKey = Object(_tilecoord_js__WEBPACK_IMPORTED_MODULE_10__["getKey"])(tileCoord);
      if (cache.containsKey(tileCoordKey)) {
        tile = /** @type {!module:ol/Tile} */ (cache.get(tileCoordKey));
      }
      var key = this.getKey();
      if (tile && tile.key == key) {
        return tile;
      } else {
        var sourceTileGrid = this.getTileGridForProjection(sourceProjection);
        var targetTileGrid = this.getTileGridForProjection(projection);
        var wrappedTileCoord =
            this.getTileCoordForTileUrlFunction(tileCoord, projection);
        var newTile = new _reproj_Tile_js__WEBPACK_IMPORTED_MODULE_8__["default"](
          sourceProjection, sourceTileGrid,
          projection, targetTileGrid,
          tileCoord, wrappedTileCoord, this.getTilePixelRatio(pixelRatio),
          this.getGutter(),
          function(z, x, y, pixelRatio) {
            return this.getTileInternal(z, x, y, pixelRatio, sourceProjection);
          }.bind(this), this.reprojectionErrorThreshold_,
          this.renderReprojectionEdges_);
        newTile.key = key;

        if (tile) {
          newTile.interimTile = tile;
          newTile.refreshInterimChain();
          cache.replace(tileCoordKey, newTile);
        } else {
          cache.set(tileCoordKey, newTile);
        }
        return newTile;
      }
    }
  };

  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {!module:ol/proj/Projection} projection Projection.
   * @return {!module:ol/Tile} Tile.
   * @protected
   */
  TileImage.prototype.getTileInternal = function getTileInternal (z, x, y, pixelRatio, projection) {
    var tile = null;
    var tileCoordKey = Object(_tilecoord_js__WEBPACK_IMPORTED_MODULE_10__["getKeyZXY"])(z, x, y);
    var key = this.getKey();
    if (!this.tileCache.containsKey(tileCoordKey)) {
      tile = this.createTile_(z, x, y, pixelRatio, projection, key);
      this.tileCache.set(tileCoordKey, tile);
    } else {
      tile = this.tileCache.get(tileCoordKey);
      if (tile.key != key) {
        // The source's params changed. If the tile has an interim tile and if we
        // can use it then we use it. Otherwise we create a new tile.  In both
        // cases we attempt to assign an interim tile to the new tile.
        var interimTile = tile;
        tile = this.createTile_(z, x, y, pixelRatio, projection, key);

        //make the new tile the head of the list,
        if (interimTile.getState() == _TileState_js__WEBPACK_IMPORTED_MODULE_4__["default"].IDLE) {
          //the old tile hasn't begun loading yet, and is now outdated, so we can simply discard it
          tile.interimTile = interimTile.interimTile;
        } else {
          tile.interimTile = interimTile;
        }
        tile.refreshInterimChain();
        this.tileCache.replace(tileCoordKey, tile);
      }
    }
    return tile;
  };

  /**
   * Sets whether to render reprojection edges or not (usually for debugging).
   * @param {boolean} render Render the edges.
   * @api
   */
  TileImage.prototype.setRenderReprojectionEdges = function setRenderReprojectionEdges (render) {
    var this$1 = this;

    if (!_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"] ||
        this.renderReprojectionEdges_ == render) {
      return;
    }
    this.renderReprojectionEdges_ = render;
    for (var id in this$1.tileCacheForProjection) {
      this$1.tileCacheForProjection[id].clear();
    }
    this.changed();
  };

  /**
   * Sets the tile grid to use when reprojecting the tiles to the given
   * projection instead of the default tile grid for the projection.
   *
   * This can be useful when the default tile grid cannot be created
   * (e.g. projection has no extent defined) or
   * for optimization reasons (custom tile size, resolutions, ...).
   *
   * @param {module:ol/proj~ProjectionLike} projection Projection.
   * @param {module:ol/tilegrid/TileGrid} tilegrid Tile grid to use for the projection.
   * @api
   */
  TileImage.prototype.setTileGridForProjection = function setTileGridForProjection (projection, tilegrid) {
    if (_reproj_common_js__WEBPACK_IMPORTED_MODULE_0__["ENABLE_RASTER_REPROJECTION"]) {
      var proj = Object(_proj_js__WEBPACK_IMPORTED_MODULE_7__["get"])(projection);
      if (proj) {
        var projKey = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getUid"])(proj).toString();
        if (!(projKey in this.tileGridForProjection)) {
          this.tileGridForProjection[projKey] = tilegrid;
        }
      }
    }
  };

  return TileImage;
}(_source_UrlTile_js__WEBPACK_IMPORTED_MODULE_9__["default"]));


/**
 * @param {module:ol/ImageTile} imageTile Image tile.
 * @param {string} src Source.
 */
function defaultTileLoadFunction(imageTile, src) {
  imageTile.getImage().src = src;
}

/* harmony default export */ __webpack_exports__["default"] = (TileImage);

//# sourceMappingURL=TileImage.js.map

/***/ }),

/***/ "./node_modules/ol/source/TileWMS.js":
/*!*******************************************!*\
  !*** ./node_modules/ol/source/TileWMS.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/ol/source/common.js");
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asserts.js */ "./node_modules/ol/asserts.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obj.js */ "./node_modules/ol/obj.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math.js */ "./node_modules/ol/math.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var _reproj_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reproj.js */ "./node_modules/ol/reproj.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../size.js */ "./node_modules/ol/size.js");
/* harmony import */ var _source_TileImage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../source/TileImage.js */ "./node_modules/ol/source/TileImage.js");
/* harmony import */ var _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../source/WMSServerType.js */ "./node_modules/ol/source/WMSServerType.js");
/* harmony import */ var _tilecoord_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tilecoord.js */ "./node_modules/ol/tilecoord.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../string.js */ "./node_modules/ol/string.js");
/* harmony import */ var _uri_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../uri.js */ "./node_modules/ol/uri.js");
/**
 * @module ol/source/TileWMS
 */
















/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions] Attributions.
 * @property {number} [cacheSize=2048] Cache size.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {Object<string,*>} params WMS request parameters.
 * At least a `LAYERS` param is required. `STYLES` is
 * `''` by default. `VERSION` is `1.3.0` by default. `WIDTH`, `HEIGHT`, `BBOX`
 * and `CRS` (`SRS` for WMS version < 1.3.0) will be set dynamically.
 * @property {number} [gutter=0]
 * The size in pixels of the gutter around image tiles to ignore. By setting
 * this property to a non-zero value, images will be requested that are wider
 * and taller than the tile size by a value of `2 x gutter`.
 * Using a non-zero value allows artifacts of rendering at tile edges to be
 * ignored. If you control the WMS service it is recommended to address
 * "artifacts at tile edges" issues by properly configuring the WMS service. For
 * example, MapServer has a `tile_map_edge_buffer` configuration parameter for
 * this. See http://mapserver.org/output/tile_mode.html.
 * @property {boolean} [hidpi=true] Use the `ol/Map#pixelRatio` value when requesting
 * the image from the remote server.
 * @property {module:ol/proj~ProjectionLike} projection Projection.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {module:ol/ImageTile~TileClass} [tileClass] Class used to instantiate image tiles.
 * Default is {@link module:ol/ImageTile~TileClass}.
 * @property {module:ol/tilegrid/TileGrid} [tileGrid] Tile grid. Base this on the resolutions,
 * tilesize and extent supported by the server.
 * If this is not defined, a default grid will be used: if there is a projection
 * extent, the grid will be based on that; if not, a grid based on a global
 * extent with origin at 0,0 will be used..
 * @property {module:ol/source/WMSServerType|string} [serverType]
 * The type of the remote WMS server. Currently only used when `hidpi` is
 * `true`.
 * @property {module:ol/Tile~LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {string} [url] WMS service URL.
 * @property {Array<string>} [urls] WMS service urls.
 * Use this instead of `url` when the WMS supports multiple urls for GetMap requests.
 * @property {boolean} [wrapX=true] Whether to wrap the world horizontally.
 * When set to `false`, only one world
 * will be rendered. When `true`, tiles will be requested for one world only,
 * but they will be wrapped horizontally to render multiple worlds.
 * @property {number} [transition] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 */


/**
 * @classdesc
 * Layer source for tile data from WMS servers.
 * @api
 */
var TileWMS = (function (TileImage) {
  function TileWMS(opt_options) {

    var options = opt_options || {};

    var params = options.params || {};

    var transparent = 'TRANSPARENT' in params ? params['TRANSPARENT'] : true;

    TileImage.call(this, {
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      crossOrigin: options.crossOrigin,
      opaque: !transparent,
      projection: options.projection,
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      tileClass: options.tileClass,
      tileGrid: options.tileGrid,
      tileLoadFunction: options.tileLoadFunction,
      url: options.url,
      urls: options.urls,
      wrapX: options.wrapX !== undefined ? options.wrapX : true,
      transition: options.transition
    });

    /**
     * @private
     * @type {number}
     */
    this.gutter_ = options.gutter !== undefined ? options.gutter : 0;

    /**
     * @private
     * @type {!Object}
     */
    this.params_ = params;

    /**
     * @private
     * @type {boolean}
     */
    this.v13_ = true;

    /**
     * @private
     * @type {module:ol/source/WMSServerType|undefined}
     */
    this.serverType_ = /** @type {module:ol/source/WMSServerType|undefined} */ (options.serverType);

    /**
     * @private
     * @type {boolean}
     */
    this.hidpi_ = options.hidpi !== undefined ? options.hidpi : true;

    /**
     * @private
     * @type {module:ol/extent~Extent}
     */
    this.tmpExtent_ = Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["createEmpty"])();

    this.updateV13_();
    this.setKey(this.getKeyForParams_());

  }

  if ( TileImage ) TileWMS.__proto__ = TileImage;
  TileWMS.prototype = Object.create( TileImage && TileImage.prototype );
  TileWMS.prototype.constructor = TileWMS;

  /**
   * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
   * projection. Return `undefined` if the GetFeatureInfo URL cannot be
   * constructed.
   * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {module:ol/proj~ProjectionLike} projection Projection.
   * @param {!Object} params GetFeatureInfo params. `INFO_FORMAT` at least should
   *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
   *     in the `LAYERS` parameter will be used. `VERSION` should not be
   *     specified here.
   * @return {string|undefined} GetFeatureInfo URL.
   * @api
   */
  TileWMS.prototype.getGetFeatureInfoUrl = function getGetFeatureInfoUrl (coordinate, resolution, projection, params) {
    var projectionObj = Object(_proj_js__WEBPACK_IMPORTED_MODULE_5__["get"])(projection);
    var sourceProjectionObj = this.getProjection();

    var tileGrid = this.getTileGrid();
    if (!tileGrid) {
      tileGrid = this.getTileGridForProjection(projectionObj);
    }

    var tileCoord = tileGrid.getTileCoordForCoordAndResolution(coordinate, resolution);

    if (tileGrid.getResolutions().length <= tileCoord[0]) {
      return undefined;
    }

    var tileResolution = tileGrid.getResolution(tileCoord[0]);
    var tileExtent = tileGrid.getTileCoordExtent(tileCoord, this.tmpExtent_);
    var tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_7__["toSize"])(tileGrid.getTileSize(tileCoord[0]), this.tmpSize);


    var gutter = this.gutter_;
    if (gutter !== 0) {
      tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_7__["buffer"])(tileSize, gutter, this.tmpSize);
      tileExtent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["buffer"])(tileExtent, tileResolution * gutter, tileExtent);
    }

    if (sourceProjectionObj && sourceProjectionObj !== projectionObj) {
      tileResolution = Object(_reproj_js__WEBPACK_IMPORTED_MODULE_6__["calculateSourceResolution"])(sourceProjectionObj, projectionObj, coordinate, tileResolution);
      tileExtent = Object(_proj_js__WEBPACK_IMPORTED_MODULE_5__["transformExtent"])(tileExtent, projectionObj, sourceProjectionObj);
      coordinate = Object(_proj_js__WEBPACK_IMPORTED_MODULE_5__["transform"])(coordinate, projectionObj, sourceProjectionObj);
    }

    var baseParams = {
      'SERVICE': 'WMS',
      'VERSION': _common_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WMS_VERSION"],
      'REQUEST': 'GetFeatureInfo',
      'FORMAT': 'image/png',
      'TRANSPARENT': true,
      'QUERY_LAYERS': this.params_['LAYERS']
    };
    Object(_obj_js__WEBPACK_IMPORTED_MODULE_3__["assign"])(baseParams, this.params_, params);

    var x = Math.floor((coordinate[0] - tileExtent[0]) / tileResolution);
    var y = Math.floor((tileExtent[3] - coordinate[1]) / tileResolution);

    baseParams[this.v13_ ? 'I' : 'X'] = x;
    baseParams[this.v13_ ? 'J' : 'Y'] = y;

    return this.getRequestUrl_(tileCoord, tileSize, tileExtent,
      1, sourceProjectionObj || projectionObj, baseParams);
  };

  /**
   * @inheritDoc
   */
  TileWMS.prototype.getGutter = function getGutter () {
    return this.gutter_;
  };

  /**
   * Get the user-provided params, i.e. those passed to the constructor through
   * the "params" option, and possibly updated using the updateParams method.
   * @return {Object} Params.
   * @api
   */
  TileWMS.prototype.getParams = function getParams () {
    return this.params_;
  };

  /**
   * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
   * @param {module:ol/size~Size} tileSize Tile size.
   * @param {module:ol/extent~Extent} tileExtent Tile extent.
   * @param {number} pixelRatio Pixel ratio.
   * @param {module:ol/proj/Projection} projection Projection.
   * @param {Object} params Params.
   * @return {string|undefined} Request URL.
   * @private
   */
  TileWMS.prototype.getRequestUrl_ = function getRequestUrl_ (tileCoord, tileSize, tileExtent, pixelRatio, projection, params) {

    var urls = this.urls;
    if (!urls) {
      return undefined;
    }

    params['WIDTH'] = tileSize[0];
    params['HEIGHT'] = tileSize[1];

    params[this.v13_ ? 'CRS' : 'SRS'] = projection.getCode();

    if (!('STYLES' in this.params_)) {
      params['STYLES'] = '';
    }

    if (pixelRatio != 1) {
      switch (this.serverType_) {
        case _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_9__["default"].GEOSERVER:
          var dpi = (90 * pixelRatio + 0.5) | 0;
          if ('FORMAT_OPTIONS' in params) {
            params['FORMAT_OPTIONS'] += ';dpi:' + dpi;
          } else {
            params['FORMAT_OPTIONS'] = 'dpi:' + dpi;
          }
          break;
        case _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_9__["default"].MAPSERVER:
          params['MAP_RESOLUTION'] = 90 * pixelRatio;
          break;
        case _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_9__["default"].CARMENTA_SERVER:
        case _source_WMSServerType_js__WEBPACK_IMPORTED_MODULE_9__["default"].QGIS:
          params['DPI'] = 90 * pixelRatio;
          break;
        default:
          Object(_asserts_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(false, 52); // Unknown `serverType` configured
          break;
      }
    }

    var axisOrientation = projection.getAxisOrientation();
    var bbox = tileExtent;
    if (this.v13_ && axisOrientation.substr(0, 2) == 'ne') {
      var tmp;
      tmp = tileExtent[0];
      bbox[0] = tileExtent[1];
      bbox[1] = tmp;
      tmp = tileExtent[2];
      bbox[2] = tileExtent[3];
      bbox[3] = tmp;
    }
    params['BBOX'] = bbox.join(',');

    var url;
    if (urls.length == 1) {
      url = urls[0];
    } else {
      var index = Object(_math_js__WEBPACK_IMPORTED_MODULE_4__["modulo"])(Object(_tilecoord_js__WEBPACK_IMPORTED_MODULE_10__["hash"])(tileCoord), urls.length);
      url = urls[index];
    }
    return Object(_uri_js__WEBPACK_IMPORTED_MODULE_12__["appendParams"])(url, params);
  };

  /**
   * @inheritDoc
   */
  TileWMS.prototype.getTilePixelRatio = function getTilePixelRatio (pixelRatio) {
    return (!this.hidpi_ || this.serverType_ === undefined) ? 1 :
    /** @type {number} */ (pixelRatio);
  };

  /**
   * @private
   * @return {string} The key for the current params.
   */
  TileWMS.prototype.getKeyForParams_ = function getKeyForParams_ () {
    var this$1 = this;

    var i = 0;
    var res = [];
    for (var key in this$1.params_) {
      res[i++] = key + '-' + this$1.params_[key];
    }
    return res.join('/');
  };

  /**
   * @inheritDoc
   */
  TileWMS.prototype.fixedTileUrlFunction = function fixedTileUrlFunction (tileCoord, pixelRatio, projection) {

    var tileGrid = this.getTileGrid();
    if (!tileGrid) {
      tileGrid = this.getTileGridForProjection(projection);
    }

    if (tileGrid.getResolutions().length <= tileCoord[0]) {
      return undefined;
    }

    if (pixelRatio != 1 && (!this.hidpi_ || this.serverType_ === undefined)) {
      pixelRatio = 1;
    }

    var tileResolution = tileGrid.getResolution(tileCoord[0]);
    var tileExtent = tileGrid.getTileCoordExtent(tileCoord, this.tmpExtent_);
    var tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_7__["toSize"])(
      tileGrid.getTileSize(tileCoord[0]), this.tmpSize);

    var gutter = this.gutter_;
    if (gutter !== 0) {
      tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_7__["buffer"])(tileSize, gutter, this.tmpSize);
      tileExtent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["buffer"])(tileExtent, tileResolution * gutter, tileExtent);
    }

    if (pixelRatio != 1) {
      tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_7__["scale"])(tileSize, pixelRatio, this.tmpSize);
    }

    var baseParams = {
      'SERVICE': 'WMS',
      'VERSION': _common_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WMS_VERSION"],
      'REQUEST': 'GetMap',
      'FORMAT': 'image/png',
      'TRANSPARENT': true
    };
    Object(_obj_js__WEBPACK_IMPORTED_MODULE_3__["assign"])(baseParams, this.params_);

    return this.getRequestUrl_(tileCoord, tileSize, tileExtent,
      pixelRatio, projection, baseParams);
  };

  /**
   * Update the user-provided params.
   * @param {Object} params Params.
   * @api
   */
  TileWMS.prototype.updateParams = function updateParams (params) {
    Object(_obj_js__WEBPACK_IMPORTED_MODULE_3__["assign"])(this.params_, params);
    this.updateV13_();
    this.setKey(this.getKeyForParams_());
  };

  /**
   * @private
   */
  TileWMS.prototype.updateV13_ = function updateV13_ () {
    var version = this.params_['VERSION'] || _common_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WMS_VERSION"];
    this.v13_ = Object(_string_js__WEBPACK_IMPORTED_MODULE_11__["compareVersions"])(version, '1.3') >= 0;
  };

  return TileWMS;
}(_source_TileImage_js__WEBPACK_IMPORTED_MODULE_8__["default"]));


/* harmony default export */ __webpack_exports__["default"] = (TileWMS);

//# sourceMappingURL=TileWMS.js.map

/***/ }),

/***/ "./node_modules/ol/source/UrlTile.js":
/*!*******************************************!*\
  !*** ./node_modules/ol/source/UrlTile.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./node_modules/ol/util.js");
/* harmony import */ var _TileState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TileState.js */ "./node_modules/ol/TileState.js");
/* harmony import */ var _tileurlfunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tileurlfunction.js */ "./node_modules/ol/tileurlfunction.js");
/* harmony import */ var _source_Tile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source/Tile.js */ "./node_modules/ol/source/Tile.js");
/* harmony import */ var _source_TileEventType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../source/TileEventType.js */ "./node_modules/ol/source/TileEventType.js");
/* harmony import */ var _tilecoord_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tilecoord.js */ "./node_modules/ol/tilecoord.js");
/**
 * @module ol/source/UrlTile
 */







/**
 * @typedef {Object} Options
 * @property {module:ol/source/Source~AttributionLike} [attributions]
 * @property {number} [cacheSize]
 * @property {module:ol/extent~Extent} [extent]
 * @property {boolean} [opaque]
 * @property {module:ol/proj~ProjectionLike} [projection]
 * @property {module:ol/source/State} [state]
 * @property {module:ol/tilegrid/TileGrid} [tileGrid]
 * @property {module:ol/Tile~LoadFunction} tileLoadFunction
 * @property {number} [tilePixelRatio]
 * @property {module:ol/Tile~UrlFunction} [tileUrlFunction]
 * @property {string} [url]
 * @property {Array<string>} [urls]
 * @property {boolean} [wrapX=true]
 * @property {number} [transition]
 */


/**
 * @classdesc
 * Base class for sources providing tiles divided into a tile grid over http.
 *
 * @fires module:ol/source/TileEvent
 */
var UrlTile = (function (TileSource) {
  function UrlTile(options) {

    TileSource.call(this, {
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      extent: options.extent,
      opaque: options.opaque,
      projection: options.projection,
      state: options.state,
      tileGrid: options.tileGrid,
      tilePixelRatio: options.tilePixelRatio,
      wrapX: options.wrapX,
      transition: options.transition
    });

    /**
     * @protected
     * @type {module:ol/Tile~LoadFunction}
     */
    this.tileLoadFunction = options.tileLoadFunction;

    /**
     * @protected
     * @type {module:ol/Tile~UrlFunction}
     */
    this.tileUrlFunction = this.fixedTileUrlFunction ?
      this.fixedTileUrlFunction.bind(this) : _tileurlfunction_js__WEBPACK_IMPORTED_MODULE_2__["nullTileUrlFunction"];

    /**
     * @protected
     * @type {!Array<string>|null}
     */
    this.urls = null;

    if (options.urls) {
      this.setUrls(options.urls);
    } else if (options.url) {
      this.setUrl(options.url);
    }
    if (options.tileUrlFunction) {
      this.setTileUrlFunction(options.tileUrlFunction);
    }

    /**
     * @private
     * @type {!Object<number, boolean>}
     */
    this.tileLoadingKeys_ = {};

  }

  if ( TileSource ) UrlTile.__proto__ = TileSource;
  UrlTile.prototype = Object.create( TileSource && TileSource.prototype );
  UrlTile.prototype.constructor = UrlTile;

  /**
   * Return the tile load function of the source.
   * @return {module:ol/Tile~LoadFunction} TileLoadFunction
   * @api
   */
  UrlTile.prototype.getTileLoadFunction = function getTileLoadFunction () {
    return this.tileLoadFunction;
  };

  /**
   * Return the tile URL function of the source.
   * @return {module:ol/Tile~UrlFunction} TileUrlFunction
   * @api
   */
  UrlTile.prototype.getTileUrlFunction = function getTileUrlFunction () {
    return this.tileUrlFunction;
  };

  /**
   * Return the URLs used for this source.
   * When a tileUrlFunction is used instead of url or urls,
   * null will be returned.
   * @return {!Array<string>|null} URLs.
   * @api
   */
  UrlTile.prototype.getUrls = function getUrls () {
    return this.urls;
  };

  /**
   * Handle tile change events.
   * @param {module:ol/events/Event} event Event.
   * @protected
   */
  UrlTile.prototype.handleTileChange = function handleTileChange (event) {
    var tile = /** @type {module:ol/Tile} */ (event.target);
    var uid = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getUid"])(tile);
    var tileState = tile.getState();
    var type;
    if (tileState == _TileState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADING) {
      this.tileLoadingKeys_[uid] = true;
      type = _source_TileEventType_js__WEBPACK_IMPORTED_MODULE_4__["default"].TILELOADSTART;
    } else if (uid in this.tileLoadingKeys_) {
      delete this.tileLoadingKeys_[uid];
      type = tileState == _TileState_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR ? _source_TileEventType_js__WEBPACK_IMPORTED_MODULE_4__["default"].TILELOADERROR :
        (tileState == _TileState_js__WEBPACK_IMPORTED_MODULE_1__["default"].LOADED || tileState == _TileState_js__WEBPACK_IMPORTED_MODULE_1__["default"].ABORT) ?
          _source_TileEventType_js__WEBPACK_IMPORTED_MODULE_4__["default"].TILELOADEND : undefined;
    }
    if (type != undefined) {
      this.dispatchEvent(new _source_Tile_js__WEBPACK_IMPORTED_MODULE_3__["TileSourceEvent"](type, tile));
    }
  };

  /**
   * Set the tile load function of the source.
   * @param {module:ol/Tile~LoadFunction} tileLoadFunction Tile load function.
   * @api
   */
  UrlTile.prototype.setTileLoadFunction = function setTileLoadFunction (tileLoadFunction) {
    this.tileCache.clear();
    this.tileLoadFunction = tileLoadFunction;
    this.changed();
  };

  /**
   * Set the tile URL function of the source.
   * @param {module:ol/Tile~UrlFunction} tileUrlFunction Tile URL function.
   * @param {string=} opt_key Optional new tile key for the source.
   * @api
   */
  UrlTile.prototype.setTileUrlFunction = function setTileUrlFunction (tileUrlFunction, opt_key) {
    this.tileUrlFunction = tileUrlFunction;
    this.tileCache.pruneExceptNewestZ();
    if (typeof opt_key !== 'undefined') {
      this.setKey(opt_key);
    } else {
      this.changed();
    }
  };

  /**
   * Set the URL to use for requests.
   * @param {string} url URL.
   * @api
   */
  UrlTile.prototype.setUrl = function setUrl (url) {
    var urls = this.urls = Object(_tileurlfunction_js__WEBPACK_IMPORTED_MODULE_2__["expandUrl"])(url);
    this.setTileUrlFunction(this.fixedTileUrlFunction ?
      this.fixedTileUrlFunction.bind(this) :
      Object(_tileurlfunction_js__WEBPACK_IMPORTED_MODULE_2__["createFromTemplates"])(urls, this.tileGrid), url);
  };

  /**
   * Set the URLs to use for requests.
   * @param {Array<string>} urls URLs.
   * @api
   */
  UrlTile.prototype.setUrls = function setUrls (urls) {
    this.urls = urls;
    var key = urls.join('\n');
    this.setTileUrlFunction(this.fixedTileUrlFunction ?
      this.fixedTileUrlFunction.bind(this) :
      Object(_tileurlfunction_js__WEBPACK_IMPORTED_MODULE_2__["createFromTemplates"])(urls, this.tileGrid), key);
  };

  /**
   * @inheritDoc
   */
  UrlTile.prototype.useTile = function useTile (z, x, y) {
    var tileCoordKey = Object(_tilecoord_js__WEBPACK_IMPORTED_MODULE_5__["getKeyZXY"])(z, x, y);
    if (this.tileCache.containsKey(tileCoordKey)) {
      this.tileCache.get(tileCoordKey);
    }
  };

  return UrlTile;
}(_source_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"]));


/**
 * @type {module:ol/Tile~UrlFunction|undefined}
 * @protected
 */
UrlTile.prototype.fixedTileUrlFunction;

/* harmony default export */ __webpack_exports__["default"] = (UrlTile);

//# sourceMappingURL=UrlTile.js.map

/***/ }),

/***/ "./node_modules/ol/source/WMSServerType.js":
/*!*************************************************!*\
  !*** ./node_modules/ol/source/WMSServerType.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @module ol/source/WMSServerType
 */

/**
 * Available server types: `'carmentaserver'`, `'geoserver'`, `'mapserver'`,
 *     `'qgis'`. These are servers that have vendor parameters beyond the WMS
 *     specification that OpenLayers can make use of.
 * @enum {string}
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  CARMENTA_SERVER: 'carmentaserver',
  GEOSERVER: 'geoserver',
  MAPSERVER: 'mapserver',
  QGIS: 'qgis'
});

//# sourceMappingURL=WMSServerType.js.map

/***/ }),

/***/ "./node_modules/ol/source/common.js":
/*!******************************************!*\
  !*** ./node_modules/ol/source/common.js ***!
  \******************************************/
/*! exports provided: DEFAULT_WMS_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WMS_VERSION", function() { return DEFAULT_WMS_VERSION; });
/**
 * Default WMS version.
 * @type {string}
 */
var DEFAULT_WMS_VERSION = '1.3.0';

//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/ol/tilegrid.js":
/*!*************************************!*\
  !*** ./node_modules/ol/tilegrid.js ***!
  \*************************************/
/*! exports provided: getForProjection, wrapX, createForExtent, createXYZ, createForProjection, extentFromProjection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForProjection", function() { return getForProjection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapX", function() { return wrapX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForExtent", function() { return createForExtent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createXYZ", function() { return createXYZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForProjection", function() { return createForProjection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extentFromProjection", function() { return extentFromProjection; });
/* harmony import */ var _tilegrid_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tilegrid/common.js */ "./node_modules/ol/tilegrid/common.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./size.js */ "./node_modules/ol/size.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _extent_Corner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent/Corner.js */ "./node_modules/ol/extent/Corner.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./obj.js */ "./node_modules/ol/obj.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var _proj_Units_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proj/Units.js */ "./node_modules/ol/proj/Units.js");
/* harmony import */ var _tilegrid_TileGrid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tilegrid/TileGrid.js */ "./node_modules/ol/tilegrid/TileGrid.js");
/**
 * @module ol/tilegrid
 */










/**
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {!module:ol/tilegrid/TileGrid} Default tile grid for the
 * passed projection.
 */
function getForProjection(projection) {
  var tileGrid = projection.getDefaultTileGrid();
  if (!tileGrid) {
    tileGrid = createForProjection(projection);
    projection.setDefaultTileGrid(tileGrid);
  }
  return tileGrid;
}


/**
 * @param {module:ol/tilegrid/TileGrid} tileGrid Tile grid.
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 */
function wrapX(tileGrid, tileCoord, projection) {
  var z = tileCoord[0];
  var center = tileGrid.getTileCoordCenter(tileCoord);
  var projectionExtent = extentFromProjection(projection);
  if (!Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["containsCoordinate"])(projectionExtent, center)) {
    var worldWidth = Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["getWidth"])(projectionExtent);
    var worldsAway = Math.ceil((projectionExtent[0] - center[0]) / worldWidth);
    center[0] += worldWidth * worldsAway;
    return tileGrid.getTileCoordForCoordAndZ(center, z);
  } else {
    return tileCoord;
  }
}


/**
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number=} opt_maxZoom Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|module:ol/size~Size=} opt_tileSize Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {module:ol/extent/Corner=} opt_corner Extent corner (default is `'top-left'`).
 * @return {!module:ol/tilegrid/TileGrid} TileGrid instance.
 */
function createForExtent(extent, opt_maxZoom, opt_tileSize, opt_corner) {
  var corner = opt_corner !== undefined ? opt_corner : _extent_Corner_js__WEBPACK_IMPORTED_MODULE_3__["default"].TOP_LEFT;

  var resolutions = resolutionsFromExtent(extent, opt_maxZoom, opt_tileSize);

  return new _tilegrid_TileGrid_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    extent: extent,
    origin: Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["getCorner"])(extent, corner),
    resolutions: resolutions,
    tileSize: opt_tileSize
  });
}


/**
 * @typedef {Object} XYZOptions
 * @property {module:ol/extent~Extent} [extent] Extent for the tile grid. The origin for an XYZ tile grid is the
 * top-left corner of the extent. The zero level of the grid is defined by the resolution at which one tile fits in the
 * provided extent. If not provided, the extent of the EPSG:3857 projection is used.
 * @property {number} [maxZoom] Maximum zoom. The default is `42`. This determines the number of levels
 * in the grid set. For example, a `maxZoom` of 21 means there are 22 levels in the grid set.
 * @property {number} [minZoom=0] Minimum zoom.
 * @property {number|module:ol/size~Size} [tileSize=[256, 256]] Tile size in pixels.
 */


/**
 * Creates a tile grid with a standard XYZ tiling scheme.
 * @param {module:ol/tilegrid~XYZOptions=} opt_options Tile grid options.
 * @return {!module:ol/tilegrid/TileGrid} Tile grid instance.
 * @api
 */
function createXYZ(opt_options) {
  var options = /** @type {module:ol/tilegrid/TileGrid~Options} */ ({});
  Object(_obj_js__WEBPACK_IMPORTED_MODULE_4__["assign"])(options, opt_options !== undefined ?
    opt_options : /** @type {module:ol/tilegrid~XYZOptions} */ ({}));
  if (options.extent === undefined) {
    options.extent = Object(_proj_js__WEBPACK_IMPORTED_MODULE_5__["get"])('EPSG:3857').getExtent();
  }
  options.resolutions = resolutionsFromExtent(
    options.extent, options.maxZoom, options.tileSize);
  delete options.maxZoom;

  return new _tilegrid_TileGrid_js__WEBPACK_IMPORTED_MODULE_7__["default"](options);
}


/**
 * Create a resolutions array from an extent.  A zoom factor of 2 is assumed.
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number=} opt_maxZoom Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|module:ol/size~Size=} opt_tileSize Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @return {!Array<number>} Resolutions array.
 */
function resolutionsFromExtent(extent, opt_maxZoom, opt_tileSize) {
  var maxZoom = opt_maxZoom !== undefined ?
    opt_maxZoom : _tilegrid_common_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MAX_ZOOM"];

  var height = Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["getHeight"])(extent);
  var width = Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["getWidth"])(extent);

  var tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_1__["toSize"])(opt_tileSize !== undefined ?
    opt_tileSize : _tilegrid_common_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_TILE_SIZE"]);
  var maxResolution = Math.max(
    width / tileSize[0], height / tileSize[1]);

  var length = maxZoom + 1;
  var resolutions = new Array(length);
  for (var z = 0; z < length; ++z) {
    resolutions[z] = maxResolution / Math.pow(2, z);
  }
  return resolutions;
}


/**
 * @param {module:ol/proj~ProjectionLike} projection Projection.
 * @param {number=} opt_maxZoom Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|module:ol/size~Size=} opt_tileSize Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {module:ol/extent/Corner=} opt_corner Extent corner (default is `'top-left'`).
 * @return {!module:ol/tilegrid/TileGrid} TileGrid instance.
 */
function createForProjection(projection, opt_maxZoom, opt_tileSize, opt_corner) {
  var extent = extentFromProjection(projection);
  return createForExtent(extent, opt_maxZoom, opt_tileSize, opt_corner);
}


/**
 * Generate a tile grid extent from a projection.  If the projection has an
 * extent, it is used.  If not, a global extent is assumed.
 * @param {module:ol/proj~ProjectionLike} projection Projection.
 * @return {module:ol/extent~Extent} Extent.
 */
function extentFromProjection(projection) {
  projection = Object(_proj_js__WEBPACK_IMPORTED_MODULE_5__["get"])(projection);
  var extent = projection.getExtent();
  if (!extent) {
    var half = 180 * _proj_js__WEBPACK_IMPORTED_MODULE_5__["METERS_PER_UNIT"][_proj_Units_js__WEBPACK_IMPORTED_MODULE_6__["default"].DEGREES] / projection.getMetersPerUnit();
    extent = Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["createOrUpdate"])(-half, -half, half, half);
  }
  return extent;
}

//# sourceMappingURL=tilegrid.js.map

/***/ }),

/***/ "./node_modules/ol/tilegrid/TileGrid.js":
/*!**********************************************!*\
  !*** ./node_modules/ol/tilegrid/TileGrid.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/ol/tilegrid/common.js");
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asserts.js */ "./node_modules/ol/asserts.js");
/* harmony import */ var _TileRange_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileRange.js */ "./node_modules/ol/TileRange.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../array.js */ "./node_modules/ol/array.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math.js */ "./node_modules/ol/math.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../size.js */ "./node_modules/ol/size.js");
/* harmony import */ var _tilecoord_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tilecoord.js */ "./node_modules/ol/tilecoord.js");
/**
 * @module ol/tilegrid/TileGrid
 */










/**
 * @private
 * @type {module:ol/tilecoord~TileCoord}
 */
var tmpTileCoord = [0, 0, 0];


/**
 * @typedef {Object} Options
 * @property {module:ol/extent~Extent} [extent] Extent for the tile grid. No tiles outside this
 * extent will be requested by {@link module:ol/source/Tile} sources. When no `origin` or
 * `origins` are configured, the `origin` will be set to the top-left corner of the extent.
 * @property {number} [minZoom=0] Minimum zoom.
 * @property {module:ol/coordinate~Coordinate} [origin] The tile grid origin, i.e. where the `x`
 * and `y` axes meet (`[z, 0, 0]`). Tile coordinates increase left to right and upwards. If not
 * specified, `extent` or `origins` must be provided.
 * @property {Array<module:ol/coordinate~Coordinate>} [origins] Tile grid origins, i.e. where
 * the `x` and `y` axes meet (`[z, 0, 0]`), for each zoom level. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * origin. Tile coordinates increase left to right and upwards. If not specified, `extent` or
 * `origin` must be provided.
 * @property {!Array<number>} resolutions Resolutions. The array index of each resolution needs
 * to match the zoom level. This means that even if a `minZoom` is configured, the resolutions
 * array will have a length of `maxZoom + 1`.
 * @property {Array<module:ol/size~Size>} [sizes] Sizes.
 * @property {number|module:ol/size~Size} [tileSize] Tile size.
 * Default is `[256, 256]`.
 * @property {Array<module:ol/size~Size>} [tileSizes] Tile sizes. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * tile size.
 */


/**
 * @classdesc
 * Base class for setting the grid pattern for sources accessing tiled-image
 * servers.
 * @api
 */
var TileGrid = function TileGrid(options) {
  var this$1 = this;


  /**
   * @protected
   * @type {number}
   */
  this.minZoom = options.minZoom !== undefined ? options.minZoom : 0;

  /**
   * @private
   * @type {!Array<number>}
   */
  this.resolutions_ = options.resolutions;
  Object(_asserts_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(Object(_array_js__WEBPACK_IMPORTED_MODULE_3__["isSorted"])(this.resolutions_, function(a, b) {
    return b - a;
  }, true), 17); // `resolutions` must be sorted in descending order


  // check if we've got a consistent zoom factor and origin
  var zoomFactor;
  if (!options.origins) {
    for (var i = 0, ii = this.resolutions_.length - 1; i < ii; ++i) {
      if (!zoomFactor) {
        zoomFactor = this$1.resolutions_[i] / this$1.resolutions_[i + 1];
      } else {
        if (this$1.resolutions_[i] / this$1.resolutions_[i + 1] !== zoomFactor) {
          zoomFactor = undefined;
          break;
        }
      }
    }
  }


  /**
   * @private
   * @type {number|undefined}
   */
  this.zoomFactor_ = zoomFactor;


  /**
   * @protected
   * @type {number}
   */
  this.maxZoom = this.resolutions_.length - 1;

  /**
   * @private
   * @type {module:ol/coordinate~Coordinate}
   */
  this.origin_ = options.origin !== undefined ? options.origin : null;

  /**
   * @private
   * @type {Array<module:ol/coordinate~Coordinate>}
   */
  this.origins_ = null;
  if (options.origins !== undefined) {
    this.origins_ = options.origins;
    Object(_asserts_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(this.origins_.length == this.resolutions_.length,
      20); // Number of `origins` and `resolutions` must be equal
  }

  var extent = options.extent;

  if (extent !== undefined &&
      !this.origin_ && !this.origins_) {
    this.origin_ = Object(_extent_js__WEBPACK_IMPORTED_MODULE_4__["getTopLeft"])(extent);
  }

  Object(_asserts_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(
    (!this.origin_ && this.origins_) || (this.origin_ && !this.origins_),
    18); // Either `origin` or `origins` must be configured, never both

  /**
   * @private
   * @type {Array<number|module:ol/size~Size>}
   */
  this.tileSizes_ = null;
  if (options.tileSizes !== undefined) {
    this.tileSizes_ = options.tileSizes;
    Object(_asserts_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(this.tileSizes_.length == this.resolutions_.length,
      19); // Number of `tileSizes` and `resolutions` must be equal
  }

  /**
   * @private
   * @type {number|module:ol/size~Size}
   */
  this.tileSize_ = options.tileSize !== undefined ?
    options.tileSize :
    !this.tileSizes_ ? _common_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_TILE_SIZE"] : null;
  Object(_asserts_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(
    (!this.tileSize_ && this.tileSizes_) ||
      (this.tileSize_ && !this.tileSizes_),
    22); // Either `tileSize` or `tileSizes` must be configured, never both

  /**
   * @private
   * @type {module:ol/extent~Extent}
   */
  this.extent_ = extent !== undefined ? extent : null;


  /**
   * @private
   * @type {Array<module:ol/TileRange>}
   */
  this.fullTileRanges_ = null;

  /**
   * @private
   * @type {module:ol/size~Size}
   */
  this.tmpSize_ = [0, 0];

  if (options.sizes !== undefined) {
    this.fullTileRanges_ = options.sizes.map(function(size, z) {
      var tileRange = new _TileRange_js__WEBPACK_IMPORTED_MODULE_2__["default"](
        Math.min(0, size[0]), Math.max(size[0] - 1, -1),
        Math.min(0, size[1]), Math.max(size[1] - 1, -1));
      return tileRange;
    }, this);
  } else if (extent) {
    this.calculateTileRanges_(extent);
  }

};

/**
 * Call a function with each tile coordinate for a given extent and zoom level.
 *
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number} zoom Integer zoom level.
 * @param {function(module:ol/tilecoord~TileCoord)} callback Function called with each tile coordinate.
 * @api
 */
TileGrid.prototype.forEachTileCoord = function forEachTileCoord (extent, zoom, callback) {
  var tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
  for (var i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i) {
    for (var j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j) {
      callback([zoom, i, j]);
    }
  }
};

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {function(this: T, number, module:ol/TileRange): boolean} callback Callback.
 * @param {T=} opt_this The object to use as `this` in `callback`.
 * @param {module:ol/TileRange=} opt_tileRange Temporary module:ol/TileRange object.
 * @param {module:ol/extent~Extent=} opt_extent Temporary module:ol/extent~Extent object.
 * @return {boolean} Callback succeeded.
 * @template T
 */
TileGrid.prototype.forEachTileCoordParentTileRange = function forEachTileCoordParentTileRange (tileCoord, callback, opt_this, opt_tileRange, opt_extent) {
    var this$1 = this;

  var tileRange, x, y;
  var tileCoordExtent = null;
  var z = tileCoord[0] - 1;
  if (this.zoomFactor_ === 2) {
    x = tileCoord[1];
    y = tileCoord[2];
  } else {
    tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent);
  }
  while (z >= this.minZoom) {
    if (this$1.zoomFactor_ === 2) {
      x = Math.floor(x / 2);
      y = Math.floor(y / 2);
      tileRange = Object(_TileRange_js__WEBPACK_IMPORTED_MODULE_2__["createOrUpdate"])(x, x, y, y, opt_tileRange);
    } else {
      tileRange = this$1.getTileRangeForExtentAndZ(tileCoordExtent, z, opt_tileRange);
    }
    if (callback.call(opt_this, z, tileRange)) {
      return true;
    }
    --z;
  }
  return false;
};

/**
 * Get the extent for this tile grid, if it was configured.
 * @return {module:ol/extent~Extent} Extent.
 */
TileGrid.prototype.getExtent = function getExtent () {
  return this.extent_;
};

/**
 * Get the maximum zoom level for the grid.
 * @return {number} Max zoom.
 * @api
 */
TileGrid.prototype.getMaxZoom = function getMaxZoom () {
  return this.maxZoom;
};

/**
 * Get the minimum zoom level for the grid.
 * @return {number} Min zoom.
 * @api
 */
TileGrid.prototype.getMinZoom = function getMinZoom () {
  return this.minZoom;
};

/**
 * Get the origin for the grid at the given zoom level.
 * @param {number} z Integer zoom level.
 * @return {module:ol/coordinate~Coordinate} Origin.
 * @api
 */
TileGrid.prototype.getOrigin = function getOrigin (z) {
  if (this.origin_) {
    return this.origin_;
  } else {
    return this.origins_[z];
  }
};

/**
 * Get the resolution for the given zoom level.
 * @param {number} z Integer zoom level.
 * @return {number} Resolution.
 * @api
 */
TileGrid.prototype.getResolution = function getResolution (z) {
  return this.resolutions_[z];
};

/**
 * Get the list of resolutions for the tile grid.
 * @return {Array<number>} Resolutions.
 * @api
 */
TileGrid.prototype.getResolutions = function getResolutions () {
  return this.resolutions_;
};

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {module:ol/TileRange=} opt_tileRange Temporary module:ol/TileRange object.
 * @param {module:ol/extent~Extent=} opt_extent Temporary module:ol/extent~Extent object.
 * @return {module:ol/TileRange} Tile range.
 */
TileGrid.prototype.getTileCoordChildTileRange = function getTileCoordChildTileRange (tileCoord, opt_tileRange, opt_extent) {
  if (tileCoord[0] < this.maxZoom) {
    if (this.zoomFactor_ === 2) {
      var minX = tileCoord[1] * 2;
      var minY = tileCoord[2] * 2;
      return Object(_TileRange_js__WEBPACK_IMPORTED_MODULE_2__["createOrUpdate"])(minX, minX + 1, minY, minY + 1, opt_tileRange);
    }
    var tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent);
    return this.getTileRangeForExtentAndZ(
      tileCoordExtent, tileCoord[0] + 1, opt_tileRange);
  }
  return null;
};

/**
 * Get the extent for a tile range.
 * @param {number} z Integer zoom level.
 * @param {module:ol/TileRange} tileRange Tile range.
 * @param {module:ol/extent~Extent=} opt_extent Temporary module:ol/extent~Extent object.
 * @return {module:ol/extent~Extent} Extent.
 */
TileGrid.prototype.getTileRangeExtent = function getTileRangeExtent (z, tileRange, opt_extent) {
  var origin = this.getOrigin(z);
  var resolution = this.getResolution(z);
  var tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_6__["toSize"])(this.getTileSize(z), this.tmpSize_);
  var minX = origin[0] + tileRange.minX * tileSize[0] * resolution;
  var maxX = origin[0] + (tileRange.maxX + 1) * tileSize[0] * resolution;
  var minY = origin[1] + tileRange.minY * tileSize[1] * resolution;
  var maxY = origin[1] + (tileRange.maxY + 1) * tileSize[1] * resolution;
  return Object(_extent_js__WEBPACK_IMPORTED_MODULE_4__["createOrUpdate"])(minX, minY, maxX, maxY, opt_extent);
};

/**
 * Get a tile range for the given extent and integer zoom level.
 * @param {module:ol/extent~Extent} extent Extent.
 * @param {number} z Integer zoom level.
 * @param {module:ol/TileRange=} opt_tileRange Temporary tile range object.
 * @return {module:ol/TileRange} Tile range.
 */
TileGrid.prototype.getTileRangeForExtentAndZ = function getTileRangeForExtentAndZ (extent, z, opt_tileRange) {
  var tileCoord = tmpTileCoord;
  this.getTileCoordForXYAndZ_(extent[0], extent[1], z, false, tileCoord);
  var minX = tileCoord[1];
  var minY = tileCoord[2];
  this.getTileCoordForXYAndZ_(extent[2], extent[3], z, true, tileCoord);
  return Object(_TileRange_js__WEBPACK_IMPORTED_MODULE_2__["createOrUpdate"])(minX, tileCoord[1], minY, tileCoord[2], opt_tileRange);
};

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @return {module:ol/coordinate~Coordinate} Tile center.
 */
TileGrid.prototype.getTileCoordCenter = function getTileCoordCenter (tileCoord) {
  var origin = this.getOrigin(tileCoord[0]);
  var resolution = this.getResolution(tileCoord[0]);
  var tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_6__["toSize"])(this.getTileSize(tileCoord[0]), this.tmpSize_);
  return [
    origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution,
    origin[1] + (tileCoord[2] + 0.5) * tileSize[1] * resolution
  ];
};

/**
 * Get the extent of a tile coordinate.
 *
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {module:ol/extent~Extent=} opt_extent Temporary extent object.
 * @return {module:ol/extent~Extent} Extent.
 * @api
 */
TileGrid.prototype.getTileCoordExtent = function getTileCoordExtent (tileCoord, opt_extent) {
  var origin = this.getOrigin(tileCoord[0]);
  var resolution = this.getResolution(tileCoord[0]);
  var tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_6__["toSize"])(this.getTileSize(tileCoord[0]), this.tmpSize_);
  var minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
  var minY = origin[1] + tileCoord[2] * tileSize[1] * resolution;
  var maxX = minX + tileSize[0] * resolution;
  var maxY = minY + tileSize[1] * resolution;
  return Object(_extent_js__WEBPACK_IMPORTED_MODULE_4__["createOrUpdate"])(minX, minY, maxX, maxY, opt_extent);
};

/**
 * Get the tile coordinate for the given map coordinate and resolution.This
 * method considers that coordinates that intersect tile boundaries should be
 * assigned the higher tile coordinate.
 *
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
 * @param {number} resolution Resolution.
 * @param {module:ol/tilecoord~TileCoord=} opt_tileCoord Destination module:ol/tilecoord~TileCoord object.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 * @api
 */
TileGrid.prototype.getTileCoordForCoordAndResolution = function getTileCoordForCoordAndResolution (coordinate, resolution, opt_tileCoord) {
  return this.getTileCoordForXYAndResolution_(
    coordinate[0], coordinate[1], resolution, false, opt_tileCoord);
};

/**
 * Note that this method should not be called for resolutions that correspond
 * to an integer zoom level.Instead call the `getTileCoordForXYAndZ_` method.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} resolution Resolution (for a non-integer zoom level).
 * @param {boolean} reverseIntersectionPolicy Instead of letting edge
 *   intersections go to the higher tile coordinate, let edge intersections
 *   go to the lower tile coordinate.
 * @param {module:ol/tilecoord~TileCoord=} opt_tileCoord Temporary module:ol/tilecoord~TileCoord object.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 * @private
 */
TileGrid.prototype.getTileCoordForXYAndResolution_ = function getTileCoordForXYAndResolution_ (x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
  var z = this.getZForResolution(resolution);
  var scale = resolution / this.getResolution(z);
  var origin = this.getOrigin(z);
  var tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_6__["toSize"])(this.getTileSize(z), this.tmpSize_);

  var adjustX = reverseIntersectionPolicy ? 0.5 : 0;
  var adjustY = reverseIntersectionPolicy ? 0 : 0.5;
  var xFromOrigin = Math.floor((x - origin[0]) / resolution + adjustX);
  var yFromOrigin = Math.floor((y - origin[1]) / resolution + adjustY);
  var tileCoordX = scale * xFromOrigin / tileSize[0];
  var tileCoordY = scale * yFromOrigin / tileSize[1];

  if (reverseIntersectionPolicy) {
    tileCoordX = Math.ceil(tileCoordX) - 1;
    tileCoordY = Math.ceil(tileCoordY) - 1;
  } else {
    tileCoordX = Math.floor(tileCoordX);
    tileCoordY = Math.floor(tileCoordY);
  }

  return Object(_tilecoord_js__WEBPACK_IMPORTED_MODULE_7__["createOrUpdate"])(z, tileCoordX, tileCoordY, opt_tileCoord);
};

/**
 * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
 * they should have separate implementations.This method is for integer zoom
 * levels.The other method should only be called for resolutions corresponding
 * to non-integer zoom levels.
 * @param {number} x Map x coordinate.
 * @param {number} y Map y coordinate.
 * @param {number} z Integer zoom level.
 * @param {boolean} reverseIntersectionPolicy Instead of letting edge
 *   intersections go to the higher tile coordinate, let edge intersections
 *   go to the lower tile coordinate.
 * @param {module:ol/tilecoord~TileCoord=} opt_tileCoord Temporary module:ol/tilecoord~TileCoord object.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 * @private
 */
TileGrid.prototype.getTileCoordForXYAndZ_ = function getTileCoordForXYAndZ_ (x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
  var origin = this.getOrigin(z);
  var resolution = this.getResolution(z);
  var tileSize = Object(_size_js__WEBPACK_IMPORTED_MODULE_6__["toSize"])(this.getTileSize(z), this.tmpSize_);

  var adjustX = reverseIntersectionPolicy ? 0.5 : 0;
  var adjustY = reverseIntersectionPolicy ? 0 : 0.5;
  var xFromOrigin = Math.floor((x - origin[0]) / resolution + adjustX);
  var yFromOrigin = Math.floor((y - origin[1]) / resolution + adjustY);
  var tileCoordX = xFromOrigin / tileSize[0];
  var tileCoordY = yFromOrigin / tileSize[1];

  if (reverseIntersectionPolicy) {
    tileCoordX = Math.ceil(tileCoordX) - 1;
    tileCoordY = Math.ceil(tileCoordY) - 1;
  } else {
    tileCoordX = Math.floor(tileCoordX);
    tileCoordY = Math.floor(tileCoordY);
  }

  return Object(_tilecoord_js__WEBPACK_IMPORTED_MODULE_7__["createOrUpdate"])(z, tileCoordX, tileCoordY, opt_tileCoord);
};

/**
 * Get a tile coordinate given a map coordinate and zoom level.
 * @param {module:ol/coordinate~Coordinate} coordinate Coordinate.
 * @param {number} z Zoom level.
 * @param {module:ol/tilecoord~TileCoord=} opt_tileCoord Destination module:ol/tilecoord~TileCoord object.
 * @return {module:ol/tilecoord~TileCoord} Tile coordinate.
 * @api
 */
TileGrid.prototype.getTileCoordForCoordAndZ = function getTileCoordForCoordAndZ (coordinate, z, opt_tileCoord) {
  return this.getTileCoordForXYAndZ_(
    coordinate[0], coordinate[1], z, false, opt_tileCoord);
};

/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @return {number} Tile resolution.
 */
TileGrid.prototype.getTileCoordResolution = function getTileCoordResolution (tileCoord) {
  return this.resolutions_[tileCoord[0]];
};

/**
 * Get the tile size for a zoom level. The type of the return value matches the
 * `tileSize` or `tileSizes` that the tile grid was configured with. To always
 * get an `module:ol/size~Size`, run the result through `module:ol/size~Size.toSize()`.
 * @param {number} z Z.
 * @return {number|module:ol/size~Size} Tile size.
 * @api
 */
TileGrid.prototype.getTileSize = function getTileSize (z) {
  if (this.tileSize_) {
    return this.tileSize_;
  } else {
    return this.tileSizes_[z];
  }
};

/**
 * @param {number} z Zoom level.
 * @return {module:ol/TileRange} Extent tile range for the specified zoom level.
 */
TileGrid.prototype.getFullTileRange = function getFullTileRange (z) {
  if (!this.fullTileRanges_) {
    return null;
  } else {
    return this.fullTileRanges_[z];
  }
};

/**
 * @param {number} resolution Resolution.
 * @param {number=} opt_direction If 0, the nearest resolution will be used.
 *   If 1, the nearest lower resolution will be used. If -1, the nearest
 *   higher resolution will be used. Default is 0.
 * @return {number} Z.
 * @api
 */
TileGrid.prototype.getZForResolution = function getZForResolution (resolution, opt_direction) {
  var z = Object(_array_js__WEBPACK_IMPORTED_MODULE_3__["linearFindNearest"])(this.resolutions_, resolution, opt_direction || 0);
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_5__["clamp"])(z, this.minZoom, this.maxZoom);
};

/**
 * @param {!module:ol/extent~Extent} extent Extent for this tile grid.
 * @private
 */
TileGrid.prototype.calculateTileRanges_ = function calculateTileRanges_ (extent) {
    var this$1 = this;

  var length = this.resolutions_.length;
  var fullTileRanges = new Array(length);
  for (var z = this.minZoom; z < length; ++z) {
    fullTileRanges[z] = this$1.getTileRangeForExtentAndZ(extent, z);
  }
  this.fullTileRanges_ = fullTileRanges;
};


/* harmony default export */ __webpack_exports__["default"] = (TileGrid);

//# sourceMappingURL=TileGrid.js.map

/***/ }),

/***/ "./node_modules/ol/tileurlfunction.js":
/*!********************************************!*\
  !*** ./node_modules/ol/tileurlfunction.js ***!
  \********************************************/
/*! exports provided: createFromTemplate, createFromTemplates, createFromTileUrlFunctions, nullTileUrlFunction, expandUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFromTemplate", function() { return createFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFromTemplates", function() { return createFromTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFromTileUrlFunctions", function() { return createFromTileUrlFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullTileUrlFunction", function() { return nullTileUrlFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandUrl", function() { return expandUrl; });
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asserts.js */ "./node_modules/ol/asserts.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ "./node_modules/ol/math.js");
/* harmony import */ var _tilecoord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tilecoord.js */ "./node_modules/ol/tilecoord.js");
/**
 * @module ol/tileurlfunction
 */





/**
 * @param {string} template Template.
 * @param {module:ol/tilegrid/TileGrid} tileGrid Tile grid.
 * @return {module:ol/Tile~UrlFunction} Tile URL function.
 */
function createFromTemplate(template, tileGrid) {
  var zRegEx = /\{z\}/g;
  var xRegEx = /\{x\}/g;
  var yRegEx = /\{y\}/g;
  var dashYRegEx = /\{-y\}/g;
  return (
    /**
     * @param {module:ol/tilecoord~TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {module:ol/proj/Projection} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(tileCoord, pixelRatio, projection) {
      if (!tileCoord) {
        return undefined;
      } else {
        return template.replace(zRegEx, tileCoord[0].toString())
          .replace(xRegEx, tileCoord[1].toString())
          .replace(yRegEx, function() {
            var y = -tileCoord[2] - 1;
            return y.toString();
          })
          .replace(dashYRegEx, function() {
            var z = tileCoord[0];
            var range = tileGrid.getFullTileRange(z);
            Object(_asserts_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(range, 55); // The {-y} placeholder requires a tile grid with extent
            var y = range.getHeight() + tileCoord[2];
            return y.toString();
          });
      }
    }
  );
}


/**
 * @param {Array<string>} templates Templates.
 * @param {module:ol/tilegrid/TileGrid} tileGrid Tile grid.
 * @return {module:ol/Tile~UrlFunction} Tile URL function.
 */
function createFromTemplates(templates, tileGrid) {
  var len = templates.length;
  var tileUrlFunctions = new Array(len);
  for (var i = 0; i < len; ++i) {
    tileUrlFunctions[i] = createFromTemplate(templates[i], tileGrid);
  }
  return createFromTileUrlFunctions(tileUrlFunctions);
}


/**
 * @param {Array<module:ol/Tile~UrlFunction>} tileUrlFunctions Tile URL Functions.
 * @return {module:ol/Tile~UrlFunction} Tile URL function.
 */
function createFromTileUrlFunctions(tileUrlFunctions) {
  if (tileUrlFunctions.length === 1) {
    return tileUrlFunctions[0];
  }
  return (
    /**
     * @param {module:ol/tilecoord~TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {module:ol/proj/Projection} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(tileCoord, pixelRatio, projection) {
      if (!tileCoord) {
        return undefined;
      } else {
        var h = Object(_tilecoord_js__WEBPACK_IMPORTED_MODULE_2__["hash"])(tileCoord);
        var index = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["modulo"])(h, tileUrlFunctions.length);
        return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
      }
    }
  );
}


/**
 * @param {module:ol/tilecoord~TileCoord} tileCoord Tile coordinate.
 * @param {number} pixelRatio Pixel ratio.
 * @param {module:ol/proj/Projection} projection Projection.
 * @return {string|undefined} Tile URL.
 */
function nullTileUrlFunction(tileCoord, pixelRatio, projection) {
  return undefined;
}


/**
 * @param {string} url URL.
 * @return {Array<string>} Array of urls.
 */
function expandUrl(url) {
  var urls = [];
  var match = /\{([a-z])-([a-z])\}/.exec(url);
  if (match) {
    // char range
    var startCharCode = match[1].charCodeAt(0);
    var stopCharCode = match[2].charCodeAt(0);
    var charCode;
    for (charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
      urls.push(url.replace(match[0], String.fromCharCode(charCode)));
    }
    return urls;
  }
  match = match = /\{(\d+)-(\d+)\}/.exec(url);
  if (match) {
    // number range
    var stop = parseInt(match[2], 10);
    for (var i = parseInt(match[1], 10); i <= stop; i++) {
      urls.push(url.replace(match[0], i.toString()));
    }
    return urls;
  }
  urls.push(url);
  return urls;
}

//# sourceMappingURL=tileurlfunction.js.map

/***/ }),

/***/ "./node_modules/ol/uri.js":
/*!********************************!*\
  !*** ./node_modules/ol/uri.js ***!
  \********************************/
/*! exports provided: appendParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendParams", function() { return appendParams; });
/**
 * @module ol/uri
 */


/**
 * Appends query parameters to a URI.
 *
 * @param {string} uri The original URI, which may already have query data.
 * @param {!Object} params An object where keys are URI-encoded parameter keys,
 *     and the values are arbitrary types or arrays.
 * @return {string} The new URI.
 */
function appendParams(uri, params) {
  var keyParams = [];
  // Skip any null or undefined parameter values
  Object.keys(params).forEach(function(k) {
    if (params[k] !== null && params[k] !== undefined) {
      keyParams.push(k + '=' + encodeURIComponent(params[k]));
    }
  });
  var qs = keyParams.join('&');
  // remove any trailing ? or &
  uri = uri.replace(/[?&]$/, '');
  // append ? or & depending on whether uri has existing parameters
  uri = uri.indexOf('?') === -1 ? uri + '?' : uri + '&';
  return uri + qs;
}

//# sourceMappingURL=uri.js.map

/***/ }),

/***/ "./src/components/FieldSet.jsx":
/*!*************************************!*\
  !*** ./src/components/FieldSet.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSONField = function (_Component) {
    _inherits(JSONField, _Component);

    function JSONField(props) {
        _classCallCheck(this, JSONField);

        var _this = _possibleConstructorReturn(this, (JSONField.__proto__ || Object.getPrototypeOf(JSONField)).call(this, props));

        Object.defineProperty(_this, 'value', {
            get: function get() {
                return JSON.parse(_this.textarea.value);
            },
            set: function set(newValue) {
                _this.textarea.value = JSON.stringify(newValue || {});
            },
            enumerable: true,
            configurable: true
        });
        return _this;
    }

    _createClass(JSONField, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = _objectWithoutProperties(this.props, []);

            delete props.ref;
            return _react2.default.createElement('textarea', _extends({}, props, { ref: function ref(node) {
                    return _this2.textarea = node;
                } }));
        }
    }]);

    return JSONField;
}(_react.Component);

var FieldSet = function (_Component2) {
    _inherits(FieldSet, _Component2);

    function FieldSet(props) {
        _classCallCheck(this, FieldSet);

        var _this3 = _possibleConstructorReturn(this, (FieldSet.__proto__ || Object.getPrototypeOf(FieldSet)).call(this, props));

        _initialiseProps.call(_this3);

        _this3.state = {
            schema: props.schema || _this3.getSchema(props),
            data: props.data || _this3.getInitialData(props)
        };
        _this3.fields = {};
        return _this3;
    }

    _createClass(FieldSet, [{
        key: 'getSchema',
        value: function getSchema() {
            return {};
        }
    }, {
        key: 'getInitialData',
        value: function getInitialData() {
            return {};
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _state = this.state,
                schema = _state.schema,
                data = _state.data;

            return _react2.default.createElement(
                'div',
                null,
                Object.keys(schema).map(function (key, index) {
                    return _this4.field(key, schema[key], schema[key].getValue ? schema[key].getValue(data) : data[key] || null, index);
                })
            );
        }
    }, {
        key: 'getSelectOptions',
        value: function getSelectOptions(name, schema, value) {
            var options = schema.options;

            if (!options) return null;
            if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object") {
                return Object.keys(options).map(function (key, index) {
                    return _react2.default.createElement(
                        'option',
                        { key: index, value: key },
                        options[key]
                    );
                });
            } else if (typeof options == 'function') {
                return options(this, this.state.data);
            }
            return null;
        }
    }, {
        key: 'getData',
        value: function getData() {
            var _this5 = this;

            var data = {};
            Object.keys(this.fields).map(function (key) {
                data[key] = _this5.fields[key].value;
            });
            return data;
        }
    }]);

    return FieldSet;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this6 = this;

    this.field = function (name, schema, value, index) {
        var _schema$props = schema.props,
            props = _schema$props === undefined ? {} : _schema$props;

        props.className = "form-control";
        props.ref = function (f) {
            if (f) {
                f.value = value;
                _this6.fields[name] = f;
                f.fieldSet = _this6;
            }
        };
        var field = null;

        if (['text', 'number', 'url', 'email'].indexOf(schema.type) != -1) {
            props.type = schema.type;
            field = _react2.default.createElement('input', props);
        } else if (schema.type == "textarea") {
            field = _react2.default.createElement('textarea', props);
        } else if (schema.type == "json") {
            field = _react2.default.createElement(JSONField, props);
        } else if (schema.type == 'select') {
            field = _react2.default.createElement(
                'select',
                props,
                _this6.getSelectOptions(name, schema, value)
            );
        }
        var label = schema.label || name.charAt(0).toUpperCase() + name.slice(1);
        return _react2.default.createElement(
            'div',
            { key: index, className: 'form-group' },
            _react2.default.createElement(
                'label',
                null,
                label
            ),
            field
        );
    };
};

exports.default = FieldSet;

/***/ }),

/***/ "./src/events/Events.jsx":
/*!*******************************!*\
  !*** ./src/events/Events.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! events */ "./node_modules/events/events.js");

exports.default = new _events.EventEmitter();

/***/ }),

/***/ "./src/legend-widget.jsx":
/*!*******************************!*\
  !*** ./src/legend-widget.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _Events = __webpack_require__(/*! ./events/Events.jsx */ "./src/events/Events.jsx");

var _Events2 = _interopRequireDefault(_Events);

var _FieldSet2 = __webpack_require__(/*! ./components/FieldSet.jsx */ "./src/components/FieldSet.jsx");

var _FieldSet3 = _interopRequireDefault(_FieldSet2);

var _Group = __webpack_require__(/*! ol/layer/Group */ "./node_modules/ol/layer/Group.js");

var _Group2 = _interopRequireDefault(_Group);

var _Image = __webpack_require__(/*! ol/layer/Image */ "./node_modules/ol/layer/Image.js");

var _Image2 = _interopRequireDefault(_Image);

var _ImageWMS = __webpack_require__(/*! ol/source/ImageWMS */ "./node_modules/ol/source/ImageWMS.js");

var _ImageWMS2 = _interopRequireDefault(_ImageWMS);

var _Tile = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

var _TileWMS = __webpack_require__(/*! ol/source/TileWMS */ "./node_modules/ol/source/TileWMS.js");

var _TileWMS2 = _interopRequireDefault(_TileWMS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Legend = function (_Component) {
    _inherits(Legend, _Component);

    function Legend() {
        _classCallCheck(this, Legend);

        return _possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).apply(this, arguments));
    }

    _createClass(Legend, [{
        key: 'render',
        value: function render() {
            var map = this.props.map;

            var legends = this.getLegends(map.getLayers().getArray());
            return _react2.default.createElement(
                'div',
                null,
                legends
            );
        }
    }, {
        key: 'getLegends',
        value: function getLegends(layers) {
            var _this2 = this;

            var legends = [];
            layers.forEach(function (layer) {
                if (layer instanceof _Group2.default) {
                    legends = legends.concat(_this2.getLegends(layer.getLayers()));
                } else if (layer.getVisible() && _this2.hasLegend(layer)) {
                    if (_this2.isWMS(layer)) {
                        var s = layer.getSource(),
                            p = s.getParams();
                        var url = s.getUrls()[0];
                        url += url.indexOf("?") == -1 ? "?" : "&";
                        url += "layer=" + p.LAYERS;
                        url += "&request=GetLegendGraphic&format=image%2Fpng&transparent=true&legend_options=fontAntiAliasing:true;fontSize:14;&width=30&height=30";
                        url += "&style=" + (p.STYLES || '');
                        legends.push(_react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'h4',
                                null,
                                layer.get('title')
                            ),
                            _react2.default.createElement('img', { src: url })
                        ));
                    }
                }
            });
            return legends;
        }
    }, {
        key: 'hasLegend',
        value: function hasLegend(layer) {
            return layer instanceof _Tile2.default && layer.getSource() instanceof ol.source.TileWMS || layer instanceof _Image2.default && layer.getSource() instanceof _ImageWMS2.default || layer instanceof _Tile2.default && layer.getSource() instanceof ol.source.TileArcGISRest;
        }
    }, {
        key: 'isWMS',
        value: function isWMS(layer) {
            return layer.getSource() instanceof _TileWMS2.default || layer.getSource() instanceof _ImageWMS2.default;
        }
    }]);

    return Legend;
}(_react.Component);

var LegendWidget = function (_BaseWidget) {
    _inherits(LegendWidget, _BaseWidget);

    function LegendWidget() {
        _classCallCheck(this, LegendWidget);

        return _possibleConstructorReturn(this, (LegendWidget.__proto__ || Object.getPrototypeOf(LegendWidget)).apply(this, arguments));
    }

    _createClass(LegendWidget, [{
        key: 'render',
        value: function render() {
            var style = {
                padding: "10px 20px"
            };
            return _react2.default.createElement(
                'div',
                { style: style },
                this.state && this.state.ready ? _react2.default.createElement(Legend, { map: this.state.map }) : _react2.default.createElement(
                    'span',
                    null,
                    'The map for this Legend widget must be configured.  Click ',
                    _react2.default.createElement('i', {
                        className: 'glyphicon glyphicon-cog', style: { color: '#337ab7' } }),
                    ' icon and select a map within this dashboard.'
                )
            );
        }
    }, {
        key: 'setConfig',
        value: function setConfig(config) {
            _get(LegendWidget.prototype.__proto__ || Object.getPrototypeOf(LegendWidget.prototype), 'setConfig', this).call(this, config);
            this.attachToMapWidget(config.mapWidget);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.state.config.mapWidget) this.attachToMapWidget(this.state.config.mapWidget);
            _get(LegendWidget.prototype.__proto__ || Object.getPrototypeOf(LegendWidget.prototype), 'componentDidMount', this).call(this);
        }
    }, {
        key: 'attachToMapWidget',
        value: function attachToMapWidget(mapWidgetId) {
            var _this4 = this;

            var mapWidget = this.context.configManager.getWidget(mapWidgetId);
            if (mapWidget && mapWidget.ready) {
                this.setState({ ready: true, map: mapWidget.map });
            } else {
                _Events2.default.on('mapReady' + '_' + mapWidgetId, function (map) {
                    _this4.setState({ ready: true, map: map });
                });
            }
        }
    }]);

    return LegendWidget;
}(BaseWidget);

LegendWidget.displayName = "Legend";

var ConfigForm = function (_FieldSet) {
    _inherits(ConfigForm, _FieldSet);

    function ConfigForm(props) {
        _classCallCheck(this, ConfigForm);

        var _this5 = _possibleConstructorReturn(this, (ConfigForm.__proto__ || Object.getPrototypeOf(ConfigForm)).call(this, props));

        _this5.state.maps = [];
        return _this5;
    }

    _createClass(ConfigForm, [{
        key: 'getSchema',
        value: function getSchema(props) {
            return {
                mapWidget: {
                    type: 'select',
                    lable: 'Map',
                    options: {},
                    props: {}
                }
            };
        }
    }, {
        key: 'getInitialData',
        value: function getInitialData(props) {
            return props.widget.getConfig();
        }
    }, {
        key: 'getSelectOptions',
        value: function getSelectOptions(name, config, value) {
            var mapWidgets = this.props.widget.context.configManager.getMapWidgets();
            return Object.keys(mapWidgets).filter(function (widgetId) {
                return dash.props.widgets[widgetId].type.name == "MapWidget";
            }).map(function (widgetId) {
                return _react2.default.createElement(
                    'option',
                    { value: widgetId },
                    mapWidgets[widgetId].title,
                    ' - ',
                    widgetId
                );
            });
        }

        // componentWillMount() {
        //     getMapsData().then(res => this.setState({maps: res.objects}));
        // }

    }]);

    return ConfigForm;
}(_FieldSet3.default);

LegendWidget.ConfigForm = ConfigForm;
Dashboard.registerWidget(LegendWidget);
exports.default = LegendWidget;

/***/ })

/******/ });
//# sourceMappingURL=legend-widget.bundle.js.map